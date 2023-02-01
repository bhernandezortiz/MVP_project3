const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const client = require('./db')
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();

app.use(express.json())
app.use(cors())

app.route('/home')
    .get(async (req, res) => {
        try {
            const result = await client.query("SELECT * FROM skater_spots")
            res.status(200).type('application/JS0N').json(result.rows)
        } catch (error) {
            console.log(error.message)
        }
    })
    .post(async (req, res) =>{
        console.log(req.body)
        try {
            console.log(req.body)
            const body = req.body
            await client.query(`INSERT INTO skater_spots (location_name, distance, description) VALUES ('${body.location_name}', '${body.distance}', '${body.description}')`);
            res.status(200).type('application/json').json(body); 
        } catch (error) {
            res.status(500).type('text/plain').send(error.message)
        }
    })

app.use(express.static('./public'));

app.listen(port,() => {
    console.log(`Listening on Port: ${port}`)
})