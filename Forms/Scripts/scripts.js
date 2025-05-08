function SubmitForm(event){
    event.preventDefault(); 
    // Evita o envio padrão do formulário
    let UserName = document.getElementById("name").value;
    let UserDate = document.getElementById("date").value;
    let UserEmail = document.getElementById("email").value;
    let UserPassword = document.getElementById("password").value;
    const UserObject = {
        UserName,
        UserDate,
        UserEmail,
        UserPassword
    };
    fetch('http://localhost:3000/submit-user', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(UserObject)
    })
    .then(response => response.text())
    .then(data => {
        alert(data); 

        document.getElementById("myForm").reset();
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
        alert('Ocorreu um erro ao enviar os dados.');
    });
}
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector(".Forms");
    if (form) {
        form.addEventListener('submit', SubmitForm);
    }
});