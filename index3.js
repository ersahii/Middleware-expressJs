import express from "express";
import morgan from "morgan";
const port = 3000;
const app = express();
function myMiddleWare( req, res , next){
    console.log("Request method ",req.method);
    console.log("Request URL ",req.url);
    next();
}
app.use(myMiddleWare);
app.get("/", (req , res)=>{
    res.send("Hello world!")
})
app.listen(port , ()=>{
    console.log(`Server started at port number ${port}`);
});