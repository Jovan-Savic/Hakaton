const mongoose = require("mongoose");

async function ConnectDatabase()
{
    try 
    {
        const link = "mongodb+srv://Hakerovi_drugari:Hakerovi_drugari@cluster0.6icaf.mongodb.net/Hakaton?retryWrites=true&w=majority";
    }
    catch (err) 
    {
        console.log('Error: $(err.message)');
    }

}