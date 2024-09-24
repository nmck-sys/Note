const express = require('express'); // initialize express

const app = express(); // initialize middleware

const PORT = process.env.PORT || 3001; // declares port
const htmlroutes = require("./routes/htmlroutes")
const apiroutes = require("./routes/apiroutes")
app.use(express.json());

app.use(express.urlencoded({ extended: true })); // accessing user data from the request

app.use(express.static('public')); // makes sure files in the public folder are initialized

app.use(apiroutes)
app.use(htmlroutes)

app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}`)); // tells the program to listen for the server port