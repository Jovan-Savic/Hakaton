const express = require("express");
const app = express();
const ConnectDatabase = require("./Database/Database");
const Sport = require("./Database/Sport");
const Korisnici = require("./Database/Korisnici");

const PORT = 3000;


app.listen(PORT, () =>{
console.log("pocelo");

});

ConnectDatabase();

app.use(express.json());


app.use(express.static("FrontEnd"));

app.get("/api/eventi", async (req, res) => 
{
    try{
        const CelaBaza = await Sport.find();
        res.json({
            uspesno: true,
            poruka: CelaBaza,
        });

    }catch(err){
        res.json({
            uspesno: false,
            poruka: err.message 
        });

    }
})
app.get("/api/korisnici", async (req, res) => 
{
    try{
        const CelaBaza = await Sport.find();
        res.json({
            uspesno: true,
            poruka: CelaBaza,
        });

    }catch(err){
        res.json({
            uspesno: false,
            poruka: err.message 
        });

    }
})
app.post("/api/eventi", async (req, res) => 
{
    try{
        const ime =  req.body.ime;
         

        const noviEvent = new Sport({
            ime: ime,
        });

        const provera = await noviEvent.save();
        res.json({
            uspesno: true,
            baza: provera,
        });

    }catch(err){
        res.json({
            uspesno: false,
            poruka: err.message 
        });

    }
})
app.post("/api/korisnikuevent", async (req, res) => 
{
    try{
        const IdEventa =  req.body.IdEventa;
         
        const Event = await Sport.findById(IdEventa);

        const noviKorisnik = {
            idkorisnika: req.body.idkorisnika,
        }

        Event.ucesnici.push(noviKorisnik);


        const provera = await Event.save();
        res.json({
            uspesno: true,
            baza: provera,
        });

    }catch(err){
        res.json({
            uspesno: false,
            poruka: err.message 
        });

    }
})
