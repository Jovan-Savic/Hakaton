//GetData();
/*const express = require("express");
const app = express();
const ConnectDatabase = require("./Database/Database");
const Sport = require("./Database/Sport");

const PORT = 3000;


app.listen(PORT, () =>{
console.log("pocelo");

});

ConnectDatabase();

app.use(express.json());*/
const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", GetInput);

async function GetInput()
{
    let k=0;
    let gre=document.querySelector(".emailgreska");
    console.log("aaaaaaaaa");
let emil=document.querySelector(".emaill");
emil=emil.value;
let sifra=document.querySelector(".passl");
sifra=sifra.value;
let ner=document.querySelector(".pasg")
console.log(emil);
let neema=document.querySelector(".nema");

let korisnicii = axios.get("/api/korisnici"); // svi korisnici
console.log(korisnici); // ispis svih korisnika u consoli

if(emil.length>7)//proveras da li emil postoji
{
    gre.innerHTML="";
    console.log("aaaaaaaaa1");
if(sifra.length>7)//proverava da li pasvord odgovara
{
    ner.innerHTML="";
    korisnicii.array.forEach((korisnici) => {
        if(emel==korisnici.meil)
        {
         if(sifra==korisnici.password)   
         {
             k=1;
         }
        }
    });
    if(k==1){//logij se
        
    }
    else neema="neama tog korisnika";
}
else
{

    ner.innerHTML="Losa sifra!";
}
}
else
{
   
    gre.innerHTML="Greska sa emailom!";
}
}
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa