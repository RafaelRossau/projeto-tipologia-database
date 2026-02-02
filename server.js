const express = require("express"); // Framework para criar servidor e rotas
const multer = require('multer');
const mysql = require("mysql2"); // Biblioteca para conectar no MySQL
const path = require("path"); // Módulo nativo do Node para lidar com caminhos
const app = express(); // Cria a aplicação Express


// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Middleware para servir arquivos estáticos (HTML, CSS, JS da pasta public/)
app.use(express.static(path.join(__dirname, "public")));

// Conexão com o banco MySQL (via XAMPP)
const db = mysql.createConnection({
  host: "localhost", // Servidor do MySQL
  user: "root", // Usuário padrão do XAMPP
  password: "", // Senha (geralmente vazia no XAMPP)
  database: "Tipologia", // Nome do banco que você criou
});

// Configuração do Multer (armazenar na memória temporariamente)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//----------------------------->POST<------------------------------------------------
// 3. Rota para receber o POST do formulário
// 'imagem_upload' deve ser o mesmo 'name' usado no <input> do HTML
app.post('/public/img/', upload.single('foto_adicao'), (req, res) => {
  
    if (!req.file) {
        return res.status(400).send('Nenhum arquivo enviado.');
    }
  
  const dadosBinarios = req.file.buffer; // Aqui está o conteúdo da imagem
  

  const sql = "INSERT INTO Personagens (foto) VALUES (?)";

  db.query(sql, [dadosBinarios], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Erro ao salvar no banco.');
        }
        res.send('Imagem salva no MySQL com sucesso!');
    });
})
app.post("/Personagens", (req, res) => {
  const {nome_adicao, marcados_MBTI, marcados_anagrama, marcados_subtipo, tritipo, marcados_temperamento, marcados_Big_Five, marcados_alinhamento} = req.body; // Extrai os dados enviados pelo front
  db.query(
    "INSERT INTO Personagens ( nome, mbti, anagrama, subtipo, tritipo, temperamento, big_five, alinhamento) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", // Query SQL com placeholders
    [nome_adicao,marcados_MBTI, marcados_anagrama, marcados_subtipo, tritipo, marcados_temperamento, marcados_Big_Five, marcados_alinhamento], // Valores que substituem os "?"
    (err, result) => {
      if (err) throw err;
      res.json({ message: "Personagem adicionado com sucesso!" }); // Retorno de sucesso
    }
  );
});

//--------------------------------->GET<---------------------------------
app.get('/imagem/:id', (req, res) => {
    db.query('SELECT foto FROM Personagens WHERE id = ?', [req.params.id], (err, results) => {
        if (results.length > 0) {
            res.setHeader('Content-Type', 'image/jpeg'); // Define que o retorno é uma imagem
            res.send(results[0].foto); // Envia o Buffer binário
        }
    });
});

app.get("/Personagens", (req, res) => {
  db.query("SELECT * FROM Personagens", (err, results) => {
    if (err) throw err; // Se der erro na query, interrompe
    res.json(results); // Envia o resultado como JSON para o front
  });
});

app.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000/principal.html")
)