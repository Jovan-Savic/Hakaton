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
    datu =datu.value;
    let datugr = document.querySelector(".dategr");
    console.log(datu);
if(imeev.length>2)
{
    imegr.innerHTML="";
    console.log(lokev.length);
if(datu!=null && datu!='')
{ console.log("bbbbb");
    datugr.innerHTML="";
    //mozes da uzmes
}
else
{
datugr.innerHTML="Nema datuma!";
}
}
else
{
    imegr.innerHTML="Ime je prekratko!";
}
}