const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2'); 
const path = require('path');


const app = express();
const port = 3000;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: '127.0.0.1', 
  port: '3308,',
  user: 'root',
  password: 'admim',
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
  db.query(sql, [userData.name, userData.date, userData.email, userData.password], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      res.status(500).json({ message: 'Erro ao salvar os dados no banco de dados.' });
    } else {
      console.log('Dados inseridos com sucesso:', result);
      res.status(200).json({ message: 'Dados salvos com sucesso no banco de dados!' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});