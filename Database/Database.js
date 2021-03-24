const mongoose = require("mongoose");

async function ConnectDatabase()
{
    try 
    {
        // URL databaze
        const link = 
        "mongodb+srv://Hakerovi_drugari:Hakerovi_drugari@cluster0.6icaf.mongodb.net/Hakaton?retryWrites=true&w=majority";
    
        // konektovanje
        const connection = await mongoose.connect(link, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });

        console.log("uspesno konektovanje");
    }
    catch (err) 
    {
        console.log('Error: $(err.message)');
    }

}

// Slanje databaze
module.exports = ConnectDatabase;