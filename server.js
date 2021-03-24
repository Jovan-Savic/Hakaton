//GetData();
const express = require("express");
const app = express();
const ConnectDatabase = require("./Database/Database");
const Sport = require("./Database/Sport");

const PORT = 3000;


app.listen(PORT, () =>{
console.log("pocelo");

});

ConnectDatabase();

app.use(express.json());

const a = 1;

app.get("/", (req, res) => 
{
    res.json({
        a: a,
    })
})
//work
app.get("/api/timovi", async (req, res) => 
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
/*async function ohno()
{
    console.log("ohno");
}*/
/*a
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