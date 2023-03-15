//Bienvenida
alert('Bienvenido a PerfumeriasOnline!')

// // Inicializamos  variables
let producto = "";
let precio = 0;
let precio1 = 0;
let cantidad = 0;
let seguirComprando = false;
let precioTotal = 0;
let cantidadTotal = 0;
let finalizarCompra = false;
let subtotal = 0;
let total = 0; 




do {
     producto = prompt("¿Querés comprar shampoo, acondicionador o crema de peinar?", "Ej: crema de peinar");
     cantidad = parseInt(prompt ("¿Cuántos querés comprar?"));

//  asignar precio al producto elegido

     switch (producto) {
         case 'shampoo':
             precio = 500;
             break;
         case "acondicionador":
             precio = 700;
             break;
         case "crema de peinar":
             precio = 800;
             break;
         default:
             alert("Alguno de los datos ingresados no es correcto");
             precio= 0;
             cantidad= 0;
     }
     precioTotal += precio*cantidad;
     cantidadTotal += cantidad;

     seguirComprando = confirm("¿Querés agregar otro producto?");
 } while (seguirComprando);



 // Calculo Iva y descuento
const sumarDosNumeros = (a, b) => a + b
const restarDosNumeros = (a, b) => a - b
const calcularIva = precio => precio * 0.21
const descuento = precio1 => precio1 * 0.2
 
const iva = calcularIva(precioTotal)
const precioConIva = sumarDosNumeros(precioTotal, iva)
const precioDescuento = descuento(precioTotal)
const precioFinalDesc = restarDosNumeros(precioTotal, precioDescuento)
const ivaDesc = calcularIva(precioFinalDesc)
const precioFinalIva = sumarDosNumeros(precioFinalDesc, ivaDesc)
 

alert('Ha comprado '+cantidadTotal+' productos y el total de su compra es: $ '+precioTotal + ' + iva: $'+ iva + '. Precio final total: $'+ precioConIva)

let cuponDeDescuento = confirm("¿Tiene cupón de descuento?")

// se valida que el cupon de descuento sea de 4 dígitos

if (cuponDeDescuento) {
    let codigoDescuento = parseInt(prompt("Ingrese su código de 4 dígitos"));
    for (let i=1 ; i <= 3 ; i++){
        if (codigoDescuento < 10000){
            alert('Ha comprado '+cantidadTotal+' productos y el total de su compra con 20% descuento: $ '+precioFinalDesc + ' + iva: $'+ ivaDesc + '. Precio final total: $'+ precioFinalIva)
            envio (precioFinalIva)
            pago (precioFinalIva)
            finalizarLaCompra ()
            i=5
        }
      
        else {
        codigoDescuento = parseInt(prompt("Código inválido. Ingrese su código de 4 dígitos"));
         }
    }

     if (i == 3 ){
        alert('Ha comprado '+cantidadTotal+' productos y el total de su compra es: $ '+precioTotal + ' + iva: $'+ iva + '. Precio final total: $'+ precioConIva)
        envio (precioConIva)
        pago (precioConIva)
        finalizarLaCompra ()
    }

}
else {
    envio (precioConIva)
    pago (precioConIva)
    finalizarLaCompra ()
}

// Función envío si el total es mayor a 5000 el envío es gratis
function envio (subtotal) {

    const quiereEnvio = confirm('¿Querés envío a domicilio?')

    if (quiereEnvio && subtotal >= 5000) {
        alert('Tenés envio gratis. El total de la compra supera los $5000.')
    } else if (quiereEnvio && subtotal < 4000) {
        subtotal += 1000
        alert('El envío es de $1000. El total mas envío es: $'+subtotal)
    } else {
        alert('El total de tu compra es: $'+subtotal)
    }
};

// Función pago se aceptan solo 3,6 o 12 cuotas, si es otro numero considera 1 cuota. El interes es de 5% mensual a partir del 2do mes.

function pago (total) {

    const quiereCuotas =confirm('¿Quieres realizar el pago en cuotas?')

    if (quiereCuotas) {
    
       const cantidadCuotas = parseInt(prompt ("¿Indica la cantidad de cuotas: 3, 6 o 12?"));
       const cuotas = validarCuotas (cantidadCuotas)
       const interesMensual = 0.05
       const preciototal = total
       const valorCuotas = total *(1+interesMensual*(cuotas-1))/ cuotas
       console.log (validarCuotas)
        
         alert( 'Ha comprado por un total de $'+ total +'. El pago se realizará en '+ cuotas +' cuotas de $ ' + valorCuotas + '. Total financiado es de: $' + valorCuotas*cuotas)
    }

    else {
        alert('El pago se realizará en 1 cuota por un total de $'+ total+ '.')  
    }
}
// Se valida que solo sean 3, 6 o 12 cuotas
function validarCuotas (cantidadCuotas) {
    if (cantidadCuotas === 3 || cantidadCuotas === 6 || cantidadCuotas === 12) {
    
        return cantidadCuotas
    }
else {
    cantidadCuotas = 1
    return cantidadCuotas
}
}

function finalizarLaCompra (){
    finalizarCompra = confirm("¿Desea finalizar la compra?")

        if (finalizarCompra) {
        alert("Su compra se ha realizado con éxito!");
        }
        else {
        alert("Esperamos volver a verlo pronto!");
        }
}
