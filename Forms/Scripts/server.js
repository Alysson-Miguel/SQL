const express = require('express');
const mariadb = require('mariadb');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cors());
// Configurações da conexão com o MariaDB
const pool = mariadb.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'admim',
  port:3308,
  database: 'querystest',
  connectionLimit: 5
});

app.post('/submit-user', async (req, res) => {
  try {
    const { UserName, UserDate, UserEmail, UserPassword } = req.body;
    const conn = await pool.getConnection();
    const query = 'INSERT INTO formuser (user_name, user_date, user_email, user_password) VALUES (?, ?, ?, ?)';
    const values = [UserName, UserDate, UserEmail, UserPassword];
    const result = await conn.execute(query, values);
    conn.release();
    console.log('Dados inseridos com sucesso:', result);
    res.status(200).send('Dados enviados para o banco de dados com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir dados:', error);
    res.status(500).send('Erro ao enviar dados para o banco de dados.');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});