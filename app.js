const express = require("express");
const path = require("path")
const app = express();
const PORT = process.env.PORT;



app.use(express.static(path.join(__dirname,"/public/")))

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get ("/", (req,res)=>{
    res.render("index", {username : "iarmmi" , friends:["aaa","bbb","ccc"]});
})

app.listen(PORT, ()=>{
    console.log("Listening ", PORT);
})