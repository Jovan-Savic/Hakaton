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
        const CelaBaza = await Korisnici.find();
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
        const noviEvent = new Sport({
            ime:         req.body.ime,
            organizator: req.body.organizator,
            kontakt:     req.body.kontakt,
            datum:       req.body.datum,
            lokacija:    req.body.lokacija,
            info:        req.body.info,
            slika:       req.body.slika,
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
app.post("/api/korisnici", async (req, res) => 
{
    try{
        const noviKorisnik = new Korisnici({
            ime:         req.body.ime,
            prezime:     req.body.prezime,
            mail:        req.body.mail,
            password:    req.body.password,
            organizator: req.body.organizator,
        });

        const provera = await noviKorisnik.save();
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
