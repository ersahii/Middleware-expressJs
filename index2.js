import express from "express";
import morgan from "morgan";
const port = 3000;
const app = express();
app.use(morgan('tiny'));
app.get("/", (req , res)=>{
    res.send("Hello world!")
})
app.listen(port , ()=>{
    console.log(`Server started at port number ${port}`);
})