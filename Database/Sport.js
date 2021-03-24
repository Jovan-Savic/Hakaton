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
        urlslike: 
        {
            type: String
        },
        organizator: 
        {
            type: bool
        },

    });