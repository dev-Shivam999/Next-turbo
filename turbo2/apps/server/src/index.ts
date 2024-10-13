import express from "express";
 import{lol} from "@repo/comman/Types"
import { kam } from "./lol";

const app = express();
app.get('/', (req, res) => {
    res.json({ "hi there": [lol, kam]})
})


app.listen(4000,()=>{
    console.log("app listen on 30000");
    
})