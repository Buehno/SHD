document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    axios.post('/send-email', { name, email, message })
        .then(response => {
            Swal.fire({
                icon: 'success',
                title: 'E-mail enviado!',
                text: response.data,
            });
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Erro ao enviar e-mail',
                text: error.response.data,
            });
        });
});