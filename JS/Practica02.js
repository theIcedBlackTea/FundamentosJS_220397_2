// tipos de datos en JS
//1.- Undifined diferente de (null)
console.warn("--- Tipo de Dato UNDEFIEND");
let cliente;
console.log(`El cliente es ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente= "Daniel de Jesús";
console.log(`El cliente es ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente=220397
console.log(`El cliente es ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);


//Undefined
//2 Bollean
console.warn("--Tipo de dato: BOOLEAN( Boleano- True/False")
let esPremium="No lo sé";
console.log(`Es el cliente Premium ${esPremium}`)
console.log(`El tipo de dato de la variable esPremium es:  ${typeof(esPremium)}`)
console.log(`Asignando el valor \"true"\ a la variable.`) 
esPremium=true
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`)
console.log(`¿Es el cliente Premium? : ${esPremium}`)
console .log("Cambiando el valor de esPremium a false")
esPremium=0;


// 3.- NUMBER
var cantidad;
let saldo_cuenta=-2500
const costo_producto= 10.50
let monto_transaccion;
console.warn("--- Tipo de Dato -NUMBER (Números, positivos, negativos, decimales, flotantes")
console.log(`tu saldo actual es de : ${saldo_cuenta}, (tipo de Dato = ${typeof(saldo_cuenta)})`)
cantidad = 8;
console.log(`Has elegido comprar: 4 ${cantidad} de producto.`)
console.log(`El importe total de la compra es de : ${(cantidad*costo_producto)}`)
saldo_cuenta=saldo_cuenta-(cantidad*costo_producto);
console.log(`Tu nuevo saldo es ${saldo_cuenta}`);
// El cliente raliza un monto un abono de 1500
monto_transaccion=1500;
console.log(`Tu abono de : ${monto_transaccion} ha sido receibido, tu nuevo saldo es de :  ${saldo_cuenta+monto_transaccion}`)