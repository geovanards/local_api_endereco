function enviarDados() {
    const formulario = document.getElementById("meuFormulario");
    const formData = new FormData(formulario);
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    })};

    