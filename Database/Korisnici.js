const mongoose = require("mongoose");

const KorisnikSchema = new mongoose.Schema(
    {
        ime: 
        {
            type: String,
            trim: true,
           // required: true
        },
        prezime: 
        {
            type: String,
            trim: true,
            //required: true
        },
        mail: 
        {
            type: String,
            trim: true,
            //required: true
        },
        password: 
        {
            type: String,
            trim: true,
          //  required: true
        },
        organizator: 
        {
            type: Boolean,
           // required: true
        },

    });

module.exports = mongoose.model("Korisnici", KorisnikSchema);