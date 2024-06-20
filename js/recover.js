let email = document.querySelector(".login-email")
let email_info = document.querySelector(".email_info")
let form = document.querySelector("form")
let pass = document.querySelector(".login-password")
let ingresar = document.querySelector(".login-ingresar")
let recuperar = document.querySelector(".recuperar")
let recuperar_txt = document.querySelector(".recuperar_txt")

form.addEventListener("sumbir", function(e){
    e.preventDefault();

    if(email.value === "" ){
        email_info.innerHTML = "Por favor escriba su email.";
    } else if(recuperar.value === "") {
        recuperar_txt.innerHTML = "Por favor acepte el campo Quiero recuperar mi contraseña"
    }

})