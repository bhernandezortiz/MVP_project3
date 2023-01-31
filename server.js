const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const client = require('./db')
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json())

app.route('/home')
    .get(async (req, res) => {
        try {
            const result = await client.query("SELECT * FROM skater_spots2")
            res.status(200).type('application/JS0N').json(result.rows)
        } catch (error) {
            console.log(error.message)
        }
    })

//listener on port
app.listen(port,() => {
    console.log(`Listening on Port: ${port}`)
})