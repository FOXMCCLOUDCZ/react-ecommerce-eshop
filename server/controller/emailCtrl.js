const nodemailer = require("nodemailer")
const asyncHandler = require('express-async-handler')

// async..await is not allowed in global scope, must use a wrapper
const sendEmail = asyncHandler(async (data, req, res) => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
  }
});

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`, // sender address
    to: data.to, // list of receivers
    subject: data.subject,
    text: data.text,
    html: data.htm,
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
})

module.exports = sendEmail