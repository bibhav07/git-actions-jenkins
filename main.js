const express = require("express");
const app = express();


app.use("/hi", (req, res) => {
    res.status(200).json({ message: "hey user, welcome...." })
});

app.listen( 3000, () => {
    console.log("app running on port 3000");
    
} )