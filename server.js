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


app.use(express.static("FrontEnd"));

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
