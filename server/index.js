const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql2');
const port = process.env.PORT || 3001
const bodyParser = require('body-parser');
require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

const db = [process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_DATABASE, process.env.DB_TABELA] //host, user, password, database e tabela respectivamente

const connection = mysql.createConnection({
    host: db[0],
    user: db[1],
    password: db[2],
    database: db[3]
  });

const select_horario_brasilia = `SELECT id, text, (CONVERT_TZ(data_inc, '+00:00', '-03:00')) AS data_inc FROM ${db[3]}.${db[4]} ORDER BY id DESC;`


app.post('/addtarefa', (req, res) =>{
    const texto = req.body.texto

    connection.query(
    `INSERT INTO ${db[4]} (text) VALUES ("${texto}");`,
        function (error, results, fields) {
            if (error) {
                console.error(error);
                res.json(error)
            } else {
                console.log('Registro inserido com sucesso!');
                console.log(results);
                console.log(fields);

                connection.query(
                    select_horario_brasilia,
                    function (error, results) {
                        if (error) {
                            console.error(error);
                            res.json(error)
                        } else {
                            res.json({results, success: 'true', text: 'Mensagem enviada com sucesso!'});
                        }
                    }
                );
            }
        }
    );
})

app.post('/list', (req, res) => {

    connection.query(
        select_horario_brasilia,
        function (error, results, fields) {
            if (error) {
                console.error(error);
                res.json(error)
            } else {
                res.send(results);
            }

        }
    );

})


app.post('/delete', (req, res)=>{
    const id = req.body.id

    connection.query(
    `DELETE FROM ${db[3]}.${db[4]} WHERE id = ${id};`,
        function (error, results, fields) {
            if (error) {
                console.error(error);
                res.json(error)
            } else {
                console.log(results)
                
                connection.query(
                    select_horario_brasilia,
                    function (error, results) {
                        if (error) {
                            console.error(error);
                            res.json(error)
                        } else {
                            res.send(results);
                        }
                    }
                );
            }

        }
    );
})

app.post('/confirmAlter', (req, res)=>{
    const id = req.body.id
    const txt = req.body.txt

    connection.query(
        `UPDATE ${db[3]}.${db[4]} SET text = '${txt}' WHERE id = ${id};`,
            function (error, results, fields) {
                if (error) {
                    console.error(error);
                    res.json(error)
                } else {
                    console.log(results)
                    
                    connection.query(
                        select_horario_brasilia,
                        function (error, results) {
                            if (error) {
                                console.error(error);
                                res.json(error)
                            } else {
                                res.send(results);
                            }
                        }
                    );
                }
    
            }
        );

    console.log(id, txt)
})

app.listen(port,()=>{
    console.log(`Servidor aberto na porta ${port}`)
})