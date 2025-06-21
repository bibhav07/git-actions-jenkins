const express = require("express");
const app = express();


app.use("/hello", (req, res) => {
    res.status(200).json({ message: "hey, welcome...." })
});

app.use("/bye", (req, res) => {
    res.status(200).json({ message: "bye...." })
});
app.listen( 3000, () => {
    console.log("app running on port 3000");
    
} )
