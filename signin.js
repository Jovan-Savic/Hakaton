let imee=document.querySelector(".ime");
let imeeg=document.querySelector(".imeg");
let pree=document.querySelector(".prezimes");
let preeg=document.querySelector(".prezimeg");
let emel=document.querySelector(".emails");
let emelg=document.querySelector(".emailg");
let pass=document.querySelector(".passl");
let passg=document.querySelector(".passg");
let passre=document.querySelector(".passr");
let passreg=document.querySelector(".passrg");
if(imee>2)
{
if(pree>2)
{
if(emel.IndexOf('@')>-1)
{
if(pass>8)
{
if(passre==pass)
{
//ubacuje se u bazu
}
else
{
    passreg.innerHTML="razliciti pasword";
}
}
else
{
passg.innerHTML="password je prekratak";
}
}
else
{
    emelg.innerHTML="Los email";
}
} 
else
{
preeg.innerHTML="Prezime je prekratko";
}
}
else
{
imeeg.innerHTML="Ime je prekratko";
}