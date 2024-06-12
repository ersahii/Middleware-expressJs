import express from "express";
const app = express();
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(port , (req , res)=>{
    console.log("server started! at port" , port);
})
app.get("/", (req , res)=>{
    res.sendFile(_dirname + "/public/home2.html")
    })
app.post("/submit", (req , res)=>{
    res.send(`<h1>Your Band Name is :</h1>${req.body.streetName}${req.body.petName}`);
})