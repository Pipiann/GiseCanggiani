// console.log ("controlformulario funciona")
const valores = window.location.search;
console.log(valores);
const urlParams = new URLSearchParams (valores);
var nombre = urlParams.get ("nombre");
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