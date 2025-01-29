const axios = require('axios');

const sendEmail = async ({ name, email, message }) => {
    const data = {
        from: { email: 'MS_RbQlQd@trial-z86org8qorkgew13.mlsender.net' }, // Usando o domínio de teste
        to: [{ email: 'contatosdhclients@gmail.com' }],
        subject: `Mensagem de ${name}`,
        text: message,
        html: `<p>${message}</p>`
    };
    try {
        const response = await axios.post('https://api.mailersend.com/v1/email', data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer mlsn.ee566b5b096ab64012f9355e9291db0528ec1461fbe65c420380ec94f05824e2`
            }
        });
        console.log('Resposta da API:', response.data);
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error.response ? error.response.data : error.message);
        throw error;
    }
};

module.exports = { sendEmail };