const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/interest" , (req,res) => {
    let principal = parseInt(req.query.principal);
    let rate = parseInt(req.query.rate);
    let time = parseInt(req.query.time);
    let interest = (principal*rate*time)/100;
    let total = interest + principal;
    let ans = {
        total : total,
        interest : interest
    }
    res.json(ans);
})

app.listen(3005);