const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const { Pool } = require("pg");
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();

app.use(express.json())
app.use(cors())

const pool = new Pool ({
    user:'bhernandezortiz',
    password:'',
    port: 5432,
    database: 'skaterspotsdb',
    host: 'localhost',
    // connectionString: process.env.DATABASE_URL
});

pool.connect();

app.route('/home')
    .get(async (req, res) => {
        try {
            const result = await pool.query("SELECT * FROM skater_spots")
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
            const {rows} = await pool.query(`INSERT INTO skater_spots (location_name, distance, description) VALUES ('${body.location_name}', '${body.distance}', '${body.description}') RETURNING id`);
            const id = rows[0];
            res.send({...req.body, id})
            // res.status(200).type('application/json').json(body); 
        } catch (error) {
            res.status(500).type('text/plain').send(error.message)
        }
    })

app.route('/home/:id')
    .delete (async(req, res) => {
    const id = req.params.id
        try{
            const deleteSpot = await pool.query(`DELETE FROM skater_spots WHERE id = ${id}`)
             res.status(200).type('application/JSON').json(deleteSpot.rows)
        }catch(err){
            console.log(err)
    }
  })


  app.use(express.static('public'));

app.listen(port,() => {
    console.log(`Listening on Port: ${port}`)
})