const mongoose = require("mongoose");

const KorisnikSchema = new mongoose.Schema(
    {
        idkorisnika: 
        {
            type: String,
            trim: true,
           // required: true
        },
    });

const EventSchema = new mongoose.Schema(
    {
        ime: 
        {
            type: String,
            trim: true,
            required: true
        },
        organizator:
        {
            type: String,
           // required: true
        },
        kontakt: 
        {
            type: String,
           // required: true
        },
        datum: 
        {
            type: Date,
           // required: true
        },
        lokacija:
        {
            type: String,
           // required: true
        },
        info:
        {
            type: String,
           // required: true
        },
        ucesnici: 
        {
            type: [String],
        },

    });

module.exports = mongoose.model("Sport", EventSchema);