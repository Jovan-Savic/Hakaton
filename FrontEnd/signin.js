const addButton = document.querySelector(".zivotjebol");
addButton.addEventListener("click", GetInputa);

async function GetInputa()
{
let imee=document.querySelector(".ime");
imee=imee.value;
let imeeg=document.querySelector(".imeg");
let pree=document.querySelector(".prezimes");
pree=pree.value;
let preeg=document.querySelector(".prezimeg");
let emel=document.querySelector(".emails");
emel=emel.value;
let emelg=document.querySelector(".emailg");
let pass=document.querySelector(".passl");
pass=pass.value;
let passg=document.querySelector(".passg");
let passre=document.querySelector(".passr");
passre=passre.value;
let passreg=document.querySelector(".passrg");
console.log("AAA");
let orgaa=document.querySelector(".check");
let orga =orgaa.checked;
console.log(orga);
if(imee.length>2)
{
    imeeg.innerHTML="";
if(pree.length>2)
{
    preeg.innerHTML="";
if(emel.indexOf('@')>-1)
{
    emelg.innerHTML="";
if(pass.length>8)
{
    passg.innerHTML="";
if(passre==pass)
{
    passreg.innerHTML="";

    axios.post('/api/korisnici', 
    {
        ime: imee,
        prezime: pree,
        mail: emel,
        password: pass,
        organizator: orga
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
//ubacuje se u bazu
}
else
{
    passreg.innerHTML="razliciti pasword!";
}
}
else
{
passg.innerHTML="password je prekratak!";
}
}
else
{
    emelg.innerHTML="Los email!";
}
} 
else
{
preeg.innerHTML="Prezime je prekratko!";
}
}
else
{
imeeg.innerHTML="Ime je prekratko!";
}

if(imee.length>2 && pree.length>2 && emel.indexOf('@')>-1 && pass.length>8 && passre==pass)
{

 window.location.replace("Home2.html");
}



}
