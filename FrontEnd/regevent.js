const addButton = document.querySelector(".regeve");
addButton.addEventListener("click", Registruj);

async function Registruj()
{
    console.log("aaaaaaaaa");
    let imeev = document.querySelector(".imev");
    imeev=imeev.value;
    
    console.log("aaaaaaaaa");
    let imegr = document.querySelector(".imegr");
    let lokev = document.querySelector(".lokev");
    lokev=lokev.value;
    let lokgr = document.querySelector(".lokgr");
    
    console.log("aaaaaaaaa");
    let datu = document.querySelector(".datev")//petrov cao dokument

    let datugr = document.querySelector(".dategr");
if(imeev.length>2)
{
    imegr.innerHTML="";
    console.log(lokev.length);
if(lokev.length>4)
{
if(datu.nodeValue!=null)
{

}
else
{
datugr.innerHTML="nemas datum";
}
}
else
{
    lokgr.innerHTML="loikacija je prekratka";
}
}
else
{
    imegr.innerHTML="ime je prekratko";
}
}