getda();
async function getda()
{let eventi = await axios.get("/api/eventi"); // svi eventi
    console.log(eventi); // ispis svih eventova u consoli

}
function napravi()
{
    const eventnap= document.querySelector(".event");
    let events="";

    axios.post('/api/eventi', 
    {
        ime: ,
        organizator: /*idorganizatora*/,
        datum: /*tip promenjlljive date*/,
        lokacija: ,
        info: ,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    //eventi.forEach()
}