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

    
    let dodatno=document.querySelector("dateva");
    let datu = document.querySelector(".datev");//petrov cao dokument
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
   
   
    axios.post('/api/eventi', 
    {
        ime: imeev,
        organizator: 2,
        datum: datu,
        lokacija: lokev,
        info: dodatno,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
})
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