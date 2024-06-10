import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/" , (req , res)=>{
    res.sendFile(_dirname +"/public/home.html");
})
app.post("/submit" , (req , res)=>{
    console.log(req.body);
    res.send("Logged in successfully");
})
app.listen(port, ()=>{
    console.log(`Server started at port no ${port}`);
})