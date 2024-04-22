require("dotenv").config()
// --------------> allows the {.env} file
const express = require("express");
const app = express()
const PORT = process.env.PORT || 3000
const connectToDb = require("./config/connectToDb")
// This pulls our Mongoose connection into application
const cors = require("cors"); 
// ------------- Recieving reqs on cross-origins **
app.use(express.json())
// Express doesn't naturally convert our data to json
app.use(cors())
connectToDb()
// This initializes our connectToDb() function

// ------------------------------------------------------reQs



// -----------------------------------------------------ROUTING

//We want to establish CRUD routes for our Notes Model-->
//---{IMPORTANT}, every MODEL needs it's own Routes that include CREATE, Read, Update and Delete---{IMPORTANT}


app.get('/notes,', {  //READ
    
})
//-------------------> GET all Notes

app.get("/notes/:id", {  //READ
    
})
// ----------------------> GET a Specific Note by ID

// ------------------------------------------------READ

app.post('/notes', {   //CREATE

})
// ---------------------> Create a Note
// ------------------------------------------------CREATE

app.put('/notes/:id',{  //UPDATE

})
// ------------------------------------------------UPDATE

app.delete('/notes/:id')  //DELETE
// ------------------------------------------------DELETE
// - -  - - - - -  - - - - - - - ---  -- - - - - - -  - - - - - - - -










app.listen(PORT, ()=>{
    console.log(`Express Server Listending on port num: ${PORT}`)
});
//---------------------------------Server