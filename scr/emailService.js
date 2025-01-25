const nodemailer = require('nodemailer');

// Função para enviar o e-mail
function sendEmail({ name, email, message }) {
    // Configuração do transporte de e-mail (usando o Gmail no exemplo)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'seu-email@gmail.com',  // Substitua com seu e-mail
            pass: 'sua-senha'             // Substitua com sua senha (ou senha de app se usar Gmail)
        }
    });

    // Definição do conteúdo do e-mail
    const mailOptions = {
        from: 'seu-email@gmail.com',     // Remetente
        to: 'destinatario@example.com',  // Destinatário (pode ser o seu e-mail)
        subject: 'Mensagem de Contato',
        text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`
    };

    // Envio do e-mail
    return transporter.sendMail(mailOptions);
}

module.exports = { sendEmail };
