const mongoose = require("mongoose")
mongoose.set('strictQuery', false)

const dbConnect = () => {
    try {
        mongoose.connect(process.env.MONGODB_URL).then((data) => {
            console.log(`Databáze úspěšně připojena ze serveru: ${data.connection.host}`)
        })
        
    }
    catch(error) {
        console.log('Chyba databáze')
    }
};

module.exports = dbConnect