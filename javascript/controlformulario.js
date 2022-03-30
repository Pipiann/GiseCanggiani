// console.log ("controlformulario funciona")
const valores = window.location.search;
console.log(valores);
const urlParams = new URLSearchParams (valores);
var nombre = urlParams.get ("Nombre");
var Teléfono = urlParams.get ("Teléfono");
var Mail = urlParams.get ("Mail");
var Comentarios = urlParams.get ("Comentarios");
console.log (nombre);
console.log (Teléfono);
console.log (Mail);
console.log (Comentarios);
if (nombre !=null && Teléfono !=null && Mail !=null && Comentarios !=null) {
    alert ("los campos han sido completados correctamente se ejecutará el código");    
} else {
    alert ("los campos no han sido completados correctamente")
    
}
function validateformcontacto2 () {
    let nombre= document .getElementById ("Nombre");
    console.log (Nombre);
    console.log (Nombre. value);
    if (Nombre.value.lenght > 2) {
        campoNombre= true;
        document .getElementById ("Nombre") .classList.remove ("error");
        validarFormulario();
    } else {
        campoNombre= false;
        document .getElementById ("Nombre") .classList.add ("error");
        validarFormulario();
    }
}