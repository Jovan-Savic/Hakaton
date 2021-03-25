getda();
async function getda()
{let eventi = await axios.get("/api/eventi"); // svi eventi
    console.log(eventi); // ispis svih eventova u consoli
napravi(eventi.data.eventi);
}
function napravi(eventi)
{
    const eventnap= document.querySelector(".event");
    let events="";
    eventi.forEach((eventa) =>
    {
        eventi +=eventi+napravii(eventa);
    });
//eventi.forEach()
}
function napravii(eventa)
{
    const eime=eventa.ime;
    const elok=eventa.lokacija;
    const datum=eventa.datum;
    const info=eventa.info;
    let eve =`
    <img src="placeholder.png" style="float:left; width: auto; max-width: 400px; height:auto; max-height: 300px; border-radius: 5%; margin-right: 5px;">
    <h1 style="margin: 5px;">Dobrotvorna trka konja sabac 2021 | ${eime}</h1>
    <p> ${info}</p>
      <h3>${elok} | ${datum}</h3>
  
  
      <button  type="submit" style="bottom: 0px;">Prijavi se!</button>
    `
}