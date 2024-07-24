const express = require("express")
const app = express()
const PORT = 5000
const path = require("path")

// to read static pages like css style
const publicPthe =  path.join(__dirname , './public')
app.use (express.static (publicPthe))

// to read dynamic pages by hbs
app.set('view engine', 'hbs')
const viewsPath = path.join(__dirname,"./temp/views")
app.set("views",viewsPath)


// to read partials pages : header and footer
var hbs = require("hbs")
const partialPath = path.join(__dirname,"./temp/partials")
hbs.registerPartials(partialPath)

app.get("/",(req,res)=>{
    res.render("index",{
        title : "HOME",
        dec : "thi is the home page"
    })
})
app.get("/service",(req,res)=>{
    res.render("service",{
        title : "SERVICE",
        dec : "thi is the service page"
    })
})
app.get("/team",(req,res)=>{
    res.render("team",{
        title : "TEAM",
        dec : "thi is the service page",
        name : "Jena Kanal",
        city : "cairo",
        age : 29,
        img : "Images/bg1.jpg"
    })
})





app.listen(PORT,()=>{
    console.log("I am listen app in port 5000")
})

