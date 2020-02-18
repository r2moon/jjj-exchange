const express = require("express");
const app = express();

app.get('/', (req, res) => {
    console.log("Welcome");
    res.send("Welcome JJJ Exchange");
});

console.log(process.env.NETWORK)
app.listen(3000);
