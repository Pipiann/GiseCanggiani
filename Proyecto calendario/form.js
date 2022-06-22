const valores = window.location.search;
console.log(valores);
const urlParams = new URLSearchParams(valores);
var Evento = urlParams.get("Evento");
var NombreDelCliente = urlParams.get("NombreDelCliente");
var FechaEvento = urlParams.get("FechaEvento");
var Dirección = urlParams.get("Dirección")
var NombreSalon = urlParams.get("NombreSalon")
var Telefono = urlParams.get("Telefono")
var Presupuesto = urlParams.get("Presupuesto")
var ServicioContratado = urlParams.get("ServicioContratado")
var Camaras = urlParams.get("Camaras")
var Dron = urlParams.get("Dron")
var EdicionVivo = urlParams.get("EdicionVivo")
var PrecioFinal = urlParams.get("PrecioFinal")
var Costos = urlParams.get("Costos")
var FechaEntrega = urlParams.get("FechaEntrega")
var Comentarios = urlParams.get("Comentarios");
var campoNombre=false;
 
let Correccion = [ 
    {
        nombre: "Evento", 
        estado : true
    },
    {
        nombre: "NombreDelCliente", 
        estado : true
    },
    {
        nombre: "FechaEvento", 
        estado : true
    },
    {
        nombre: "Dirección", 
        estado : false
    },
    {
        nombre: "NombreSalon", 
        estado : true
    },
    // {NombreDelCliente : true},
    // {FechaEvento : true},
    // {Dirección : false},
    // {NombreSalon : true},
    // {Telefono : true},
    // {Presupuesto : true},
    // {ServicioContratado : true},
    // {Camaras : true},
    // {Dron : true},
    // {EdicionVivo : true},
    // {PrecioFinal : true},
    // {Costos : true},
    // {FechaEntrega : true},
    // {Comentarios : true},
]
console.log(Correccion);
var estado = true;
verificarEstado();
validarFormulario();

// if (Evento != null && NombreDelCliente != null && FechaEvento != null && PrecioFinal != null) {
//     alert("los campos han sido completados correctamente");
// } else {
//     alert("Faltan completar datos")

// }
function validateformcontacto2(idInput) {
    console.log(typeof idInput)
    console.log(idInput)
    console.log(idInput=='NombreDelCliente')
    // if (idInput=='NombreDelCliente') {
    //     var elemtoInputForm = document.getElementById("NombreDelCliente");
    // } else if (idInput=='NombreDelCliente') {
    //     var elemtoInputForm = document.getElementById("Dirección");
    // }  else{
    //     var elemtoInputForm = document.getElementById("NombreDelCliente");
    // }
    switch (idInput) {
        case 'NombreDelCliente':
            var elemtoInputForm = document.getElementById("NombreDelCliente");
            break;
        case "Dirección":
            var elemtoInputForm = document.getElementById("Dirección");
            break;
        case "NombreSalon":
            var elemtoInputForm = document.getElementById("NombreSalon");
            break;
        default:

            break;
    }

    // console.log(elemtoInputForm);

       if (elemtoInputForm.value) {
        console.log(elemtoInputForm.value);
        let valor = elemtoInputForm.value;
        if (valor.length > 2) {
            
            document.getElementById(idInput).classList.remove("error");
            cambiaEstado(idInput,true);
            validarFormulario();
        } else {
            
            document.getElementById(idInput).classList.add("error");
            cambiaEstado(idInput,false);
            validarFormulario();
        }
    }else{
        cambiaEstado(idInput,false);
        validarFormulario();
    }

}
function validarFormulario() {
    verificarEstado();
    if (estado) {
        document.getElementById("botonSubmit").removeAttribute("disabled");

    } else {
        document.getElementById("botonSubmit").setAttribute("disabled", "disabled");

    }
}
function cambiaEstado(idInput,estado) {
    for (const key in Correccion) {

        if (Correccion[key].nombre == idInput) {
            Correccion[key].estado = estado;
            console.log("cambio estado");
            break;
        }
        console.log("no se encontro");
    }
}
function verificarEstado() {
    for (const key in Correccion) {
        console.log(Correccion[key]);
        if (Correccion[key].estado == true) {
            estado = true;
        }else{
            estado = false;
            console.log("salio");
            break;
        }
    }
}


