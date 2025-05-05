const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2'); 

const app = express();
const port = 3000;


app.use(bodyParser.json());

const db = mysql.createConnection({
  host: '127.0.0.1', 
  port: '3308,',
  user: 'root',
  password: 'admin',
  database: 'querystest'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

app.get('/', (req, res) => {
  res.send('Olá! Seu servidor está funcionando e conectado ao banco de dados.');
});

app.post('/api/save-data', (req, res) => {
  const userData = req.body;

  const sql = 'INSERT INTO formuser (user_name,user_date, user_email, user_password)';
  db.query(sql, [userData.name, userData.date, userData.email, userData.password])
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
