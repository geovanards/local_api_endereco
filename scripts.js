function enviarDados() {
    const formulario = document.getElementById("meuFormulario");
    const formData = new FormData(formulario);
    const jsonData = {};


    formData.forEach((value, key) => {
        jsonData[key] = value;
    })};

    fetch('http://localhost:3000/user',{
    })
    .then(response=>{
        if (response.ok) {
            throw new Error('Erro ao enviar dados');
        }
        return response.json();
    })
    .then(data => {
        console.log('Resposta do servidor:', data);
        alert(data.message)
    })
    .catch(error =>{
        console.log('Erro:')
    })