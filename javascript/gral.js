// console.log ("hola mundo");
// var variable = 12 != 11;
// var variable2 = true == false;
// console.log (variable2);
 let resultado= sumar (1,2);
 const resultadoResta = resta (4,3);
 mostrarenConsola (resultado)
 mostrarenConsola (resultadoResta)
 function mostrarenConsola (valor){
    console.log (valor)
}

 function sumar (num1,num2) {
     return num1 + num2;
 }
// var resultado= resta (4,3);
// console.log (resultado)
// function resta (num1,num2) {
//     return num1 - num2;
// }

function resta (num1, num2){
    let resultado = num1 - num2;
    return resultado;

}