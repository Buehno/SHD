const express = require('express');
const bodyParser = require('body-parser');
const { sendEmail } = require('./emailService'); // Importando a função sendEmail
const path = require('path');

const app = express();
const port = 3000;

// Middleware para interpretar o corpo das requisições
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota para lidar com o envio do formulário
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Chama a função de envio de e-mail
    sendEmail({ name, email, message })
        .then(() => {
            res.status(200).send('E-mail enviado com sucesso!');
        })
        .catch((error) => {
            res.status(500).send('Erro ao enviar e-mail: ' + error);
        });
});

// Inicializa o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
