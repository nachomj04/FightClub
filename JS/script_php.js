
document.getElementById("formulario_login").addEventListener("inicio_form", function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch("enviar_inicio.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});


document.getElementById("formulario_registro").addEventListener("registro_form", function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch("enviar_registro.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
