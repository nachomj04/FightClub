document
  .getElementById("btn_iniciar-sesion")
  .addEventListener("click", iniciarSesion);
document.getElementById("btn_registro").addEventListener("click", registro);
window.addEventListener("resize", anchoPagina);

var container_login_registro = document.querySelector(
  ".container_login_registro"
);
var formulario_login = document.querySelector(".formulario_login");
var formulario_registro = document.querySelector(".formulario_registro");
var fondo_form_login = document.querySelector(".fondo_form_login");
var fondo_form_registro = document.querySelector(".fondo_form_registro");

function anchoPagina() {
  if (window.innerWidth > 750) {
    fondo_form_login.style.display = "block";
    fondo_form_registro.style.display = "block";
  } else {
    fondo_form_registro.style.display = "block";
    fondo_form_registro.style.opacity = "1";
    fondo_form_login.style.display = "none";
    formulario_login.style.display = "block";
    formulario_registro.style.display = "none";
    container_login_registro.style.left = "0px";
  }
}

anchoPagina();

function iniciarSesion() {
  if (window.innerWidth > 750) {
    formulario_registro.style.display = "none";
    container_login_registro.style.left = "1em";
    formulario_login.style.display = "block";
    fondo_form_registro.style.opacity = "1";
    fondo_form_login.style.opacity = "0";
  } else {
    formulario_registro.style.display = "none";
    container_login_registro.style.left = "0px";
    formulario_login.style.display = "block";
    fondo_form_registro.style.display = "block";
    fondo_form_login.style.display = "none";
  }
}

function registro() {
  if (window.innerWidth > 750) {
    formulario_registro.style.display = "block";
    container_login_registro.style.left = "30em";
    formulario_login.style.display = "none";
    fondo_form_registro.style.opacity = "0";
    fondo_form_login.style.opacity = "1";
  } else {
    formulario_registro.style.display = "block";
    container_login_registro.style.left = "0px";
    formulario_login.style.display = "none";
    fondo_form_registro.style.display = "none";
    fondo_form_login.style.display = "block";
    fondo_form_login.style.opacity = "1";
  }
}
