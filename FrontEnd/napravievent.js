getda();
async function getda()
{let eventi = await axios.get("/api/eventi"); // svi eventi
    console.log(eventi); // ispis svih eventova u consoli

}
function napravi()
{
    const eventnap= document.querySelector(".event");
    let events="";
    //eventi.forEach()
}