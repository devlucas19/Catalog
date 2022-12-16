const express = require('express')
const path = require('path')
const app = express()
const PORT = 8080
const route = require('./routes/route.js');

app.use(express.static(path.join(__dirname, "public")));
app.use('/api', route)

app.listen(PORT, () => {
    console.log(`Server's running on port ${PORT}`)
})
