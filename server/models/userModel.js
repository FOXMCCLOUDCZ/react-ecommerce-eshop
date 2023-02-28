const mongoose = require('mongoose') // Erase if already required
const bcrypt = require('bcrypt')
const validator = require('validator')
const crypto = require("crypto")

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Jméno'],
        minLength: [3, 'Vaše jméno nesmí mít méně než 3 znaky'],
        maxLength: [30, 'Vaše jméno nesmí přesáhnout 30 znaků'],
    },
    lastname: {
        type: String,
        required: [true, 'Příjmení'],
        minLength: [3, 'Vaše příjmení nesmí mít méně než 3 znaky'],
        maxLength: [30, 'Vaše příjmení nesmí přesáhnout 30 znaků'],
    },
    areacode: {
        type: String,
        required:true,
        
    },
    phone: {
        type: String,
        required:true,
        unique: true, // keep unique: true for phone field
    },
    email: {
        type: String,
        required: [true, 'Emailová adresa'],
        unique: true, // keep unique: true for email field
        validate: [validator.isEmail, 'Zadejte prosím platnou e-mailovou adresu']
    },
    street: {
        type: String,
        required:true,
    },
    numberofdescriptive: {
        type:String,
        required:true,
    },
    city: {
        type: String,
        required:true,
    },
    zipcode: {
        type: String,
        required:true,
    },
    password: {
        type: String,
        required: [true, 'Heslo'],
        minLength: [6, 'Vaše jméno nesmí mít méně než 6 znaků'],
    },
    role: {
        type: String,
        default: 'user',
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    cart: {
        type: Array,
        default: [],
    },
    wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    refreshToken: {
        type: String,
    },
    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    },
    {
    timestamps: true,
    }
)

userSchema
	.virtual("fullName")
	.get(function () {
		return this.firstName + " " + this.lastName
	})

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSaltSync(10)
    this.password = await bcrypt.hash(this.password, salt)
})
userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}
userSchema.methods.createPasswordResetToken = async function () {
    const resettoken = crypto.randomBytes(32).toString('hex')
    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resettoken)
        .digest('hex')
    this.passwordResetExpires = Date.now() + 30 * 60 * 1000 // čas 10 minut
    return resettoken
}

//Export the model
module.exports = mongoose.model('User', userSchema);