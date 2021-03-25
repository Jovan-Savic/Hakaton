


const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, () =>{
console.log("AAAA");

});

app.use(express.json());

const a = 1;

app.get("/", (req, res) => 
{
    res.json({
        a: a,
    })
})
//const ConnectDatabase = require("./Database/Database");

//ConnectDatabase();

//GetData();

/*
async function GetData()
{
    let eventovi=await axios.get("/api/eventovi"); //ovde ide ime petrove magicne datoteke za eventove (napravio sam da imne ime organizatora kontakt datum lokaciju i info)
    Napravi(eventovi.data.eventovi);
}
function Napravi(eventovi)
{
    const eventdiv=document.querySelector(".event")
    let events ="";
    eventovi.forEach((eve) =>{
    events=events+novieve();

    }
    );
     eventdiv.innerHTML = events;
}
 function novieve(eve)
 {
     const Ime = eve.ime;
     const Orga= eve.organizator;
     const Broj=eve.number;
     const date = eve.datum;
     const lok = eve.lokacija;
     const info=eve.info.toString();
    let event=`
    <div>tehnologije<div>
    `;//ovde upisem dizajn koji stave
    

    

     return event;
 }

*/