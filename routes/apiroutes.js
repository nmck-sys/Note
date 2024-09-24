const app = require("express").Router() // requires the express router
let db = require("../db/db.json")
const fs = require("fs")

app.get('/api/notes', (req, res) =>{
   db = JSON.parse(fs.readFileSync("./db/db.json")) || [] //or operator
   res.json(db)
})
app.post('/api/notes', (req, res) =>{
    const newNote = {
        title: req.body.title,
        text:req.body.text,
        id: Math.floor(Math.random() * 99999)
    }
    db.push(newNote)
    fs.writeFileSync("./db/db.json", JSON.stringify(db),function(err){
        if(err){
            throw err;
        }
    } )
    console.log("POST",db)
    res.json(db)
})
app.delete('/api/notes/:id', (req, res) =>{
    //filter
    const tempDb = db.filter((note) => {
        if(note.id != req.params.id) {
            return note
        }
    })
    db = tempDb

    fs.writeFileSync("./db/db.json", JSON.stringify(db),function(err){
        if(err){
            throw err;
        }
    } )
    console.log("POST",db)
    res.json(db)
})

module.exports = app