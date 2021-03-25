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
            type: Boolean,
            required: true
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
            type: KorisnikSchema,
            required: true
        },
        kontakt: 
        {
            type: String,
            required: true
        },
        datum: 
        {
            type: Date,
            required: true
        },
        lokacija:
        {
            type: String,
            required: true
        },
        info:
        {
            type: String,
            required: true
        },
        ucesnici: 
        {
            type: [KorisnikSchema]
        },
        slike:
        {
            type: [String],
            required: true
        },

    });

module.exports = mongoose.model("Sport", EventSchema);