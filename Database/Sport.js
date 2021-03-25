const mongoose = require("mongoose");

const KorisnikSchema = new mongoose.Schema(
    {
        ime: 
        {
            type: String,
            trim: true,
            required: true
        },
        prezime: 
        {
            type: String,
            trim: true,
            required: true
        },
        mail: 
        {
            type: String,
            trim: true,
            required: true
        },
        password: 
        {
            type: String,
            trim: true,
            required: true
        },
        organizator: 
        {
            type: Boolean
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
            type: KorisnikSchema
        },
        kontakt: 
        {
            type: String
        },
        datum: 
        {
            type: Date
        },
        lokacija:
        {
            type: String
        },
        info:
        {
            type: String
        },
        ucesnici: 
        {
            type: [KorisnikSchema]
        },
        slike:
        {
            type: [String]
        },

    });

module.exports = mongoose.model("Sport", EventSchema);