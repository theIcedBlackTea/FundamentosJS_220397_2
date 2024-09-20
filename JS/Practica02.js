// tipo de datos en JS

//1.- Undifined diferente de (null)
console.warn("--- Tipo de Dato UNDEFIEND");
let cliente;
console.log(`El cliente es ${cliente}`); // ALT+96 PARA 96 ``
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente= "Daniel de Jesús";
console.log(`El cliente es ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente=230733
console.log(`El cliente es ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

//Undefined

//2 Bollean

console.warn("--Tipo de dato: BOOLEAN( Boleano- True/False)")
let esPremium="No lo sé";
console.log(`Es el cliente Premium ${esPremium}`)
console.log(`El tipo de dato ede la variable esPremium es:  ${typeof(esPremium)}`)
console.log(`Asignado el valor \"true" a la variable.`)
esPremium=true
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`)
console.log(`¿Es el cliente Premium? : ${esPremium}`)
console .log("Cambiando el valor de esPremium a false")
esPremium=0;
// 3.- number
var cantidad;
let saldo_cuenta=-2500
const costo_producto= 10.50
let monto_transaccion;
console.warn("--- Tipo de Dato -NUMBER (Numeros, positivos, negativos, decimales, flotantes)")
console.log(`tu saldo eal dia de hoy es de : ${saldo_cuenta}, (tipo de Dato = ${typeof(saldo_cuenta)})`)
cantidad = 8;
console.log(`Has elegido comprar: 4 ${cantidad} de producto.`)
console.log(`El importe total de la compra es de : ${(cantidad*costo_producto)}`)
saldo_cuenta=saldo_cuenta-(cantidad*costo_producto);
console.log(`Tu nuevo saldo es ${saldo_cuenta}`);
// El cliente raliza un monto un abono de 1500
monto_transaccion=1500;
console.log(`Tu abono de : ${monto_transaccion} ha sido receibido, tu nuevo saldo es de :  ${saldo_cuenta+monto_transaccion}`)

//  4. STRING (cadena de caracteres)
const alumno = "Marcos Jesus Rios Duran";
let producto;
console.warn("--- Tipo de dato - STRING (Cadena de caracteres)")
console.log (`El nobre del alummno es  ${alumno}, que es de tipo de dato ${typeof(alumno)}` )

// inicialisamos el valor de lavariable producto
producto="MONITOR 20\" FULL HD"
console.log(`El nombre del producto es ${producto}, que es de tipo ${typeof(producto)} `)

console.log(`Más adelante podremos transformar el contenido de los STRING usando metodos y funciones especificas, como comvertir su valor a mayusulas: ${alumno} => ${alumno.toUpperCase()}`)
console.log(`0 en su defecto a minusculas: ${producto}=> ${alumno.toLowerCase()}`)

// 5. TIPO DE DATO BIGINT (un numero de mayor amplitud)

const numBig=1234567890;
const numBig2=12345678901234567890;
let numBig3=12345678901234567890134567890;
let numBig4=1234567890123456789012345678901234567890;
// el numero que pone punto decimales una e+numero
console.warn("--- Tipo de dato - BIGINT (numero de mayor amplitud)")

console.log(`El primer experimento de un numero  grande es: ${numBig}, que si es soportado por NUMBER y su tipo de dato es: ${typeof(numBig)}`)
console.log(`El segundo experimento de un numero  grande es: ${numBig2}, que si es soportado por NUMBER y su tipo de dato es: ${typeof(numBig2)}`)
console.log(`El tercer experimento de un numero  grande es: ${numBig3}, que si es soportado por NUMBER pero perdiendo precision y su tipo de dato es: ${typeof(numBig3)}`)
console.log(`El cuarto experimento de un numero  grande es: ${numBig4}, que si es soportado por NUMBER pero perdiendo precision y su tipo de dato es: ${typeof(numBig4)}`)

let numBig5=BigInt(123456789012345678901234567890n);
let numBig6=BigInt(1234567890123456789012345678901234567890n);


console.log(`El quinto experimento de un numero  grande es: ${numBig5}, que si no es soportado por NUMBER perdiendo presicion y su tipo de dato es: ${typeof(numBig5)}`)
console.log(`El sexto experimento de un numero  grande es: ${numBig6}, que si no es soportado por NUMBER perdiendo precision  y su tipo de dato es: ${typeof(numBig6)}`)

const nume=25;
//console.log(`intentado realizar una suma entre un bigint y number, elresultado es: ${nume+numBig5} `) NO SE PUEDE SUMAR TIPOS DE DATOS DIFERENTES
console.log(`intentado realizar una suma entre un bigint y number, elresultado es: ${BigInt(nume)+numBig5} `)

// TIPO DE DATO SYMBOL
console.warn("--- Tipod de Dato SYMBOL (Simbolo)")
const nu1 =5;
const nu2 =5.0;
const nu3 ="5";
const nu4 ="5.0";
const nu5= Symbol(5)
const nu6= Symbol(5)
const nu7= Symbol(5.0)
const nu8= Symbol("5")
const nu9= Symbol("5.0")

// pruebaas comparativas
console.log("¿Es 5 = 5.0?")

if(nu1==nu2){
    console.log("Se comporaro nu1 con nu2 determinando que tienen el mismo tipo de dato")

} else{
    console.log("Se comporaro nu1 con nu2 determinando que no tienen el mismo tipo de dato")

}
console.log("¿Es 5 = \"5\"?")

if(nu1==nu3){
    console.log("Se comporaro nu1 con nu3 determinando que tienen el mismo tipo de dato")

} else{
    console.log("Se comporaro nu1 con nu3 determinando que no tienen el mismo tipo de dato")

}
console.log("¿Es 5 = \"5\"? usando === para comparar extrictamente el valor y el tipo de datos" )

if(nu1===nu3){
    console.log("Se comporaro nu1 con nu3 determinando que tienen el mismo tipo de dato")

} else{
    console.log("Se comporaro nu1 con nu3 determinando que no tienen el mismo tipo de dato")

}
console.log("¿Es 5 = \"5.0\"?")

if(nu1==nu4){
    console.log("Se comporaro nu1 con nu4 determinando que tienen el mismo tipo de dato")

} else{
    console.log("Se comporaro nu1 con nu4 determinando que no tienen el mismo tipo de dato")

}
console.log("¿Es 5 = \"5.0\"usando === para comparar extrictamente ?")

if(nu1===nu4){
    console.log("Se comporaro nu1 con nu4 determinando que tienen el mismo tipo de dato")

} else{
    console.log("Se comporaro nu1 con nu4 determinando que no tienen el mismo tipo de dato")

}
console.log(`¿Es 5 === Symbol (5)?, antes de comparar anali<REMOS QUE TIPO DE DATOS SON: SIENDO NUMERO1 DE TIPO ${typeof(nu1)} y Numero 5 es de tipo ${typeof(nu5)} `)

if(nu1==nu5){
    console.log("Se comporaro nu1 con nu5 determinando que tienen el mismo tipo de dato")

} else{
    console.log("Se comporaro nu1 con nu5 determinando que no tienen el mismo tipo de dato")

}
console.log("¿Es 5 = Symbol(5) usando === para ser mas extricto al comparar?")

if(nu1===nu5){
    console.log("Se comporaro nu1 con nu3 determinando que tienen el mismo tipo de dato")

} else{
    console.log("Se comporaro nu1 con nu5 determinando que no tienen el mismo tipo de dato")

}