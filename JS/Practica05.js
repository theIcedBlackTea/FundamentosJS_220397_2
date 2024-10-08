const bg ="linear-gradient(11deg, rgba(199, 0, 36, 1) 0%, rgba(0, 9, 121, 1) 33%, rgba(0, 212, 255, 1) 86%";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size:1.0rem;`;

console.warn("---Práctica 07: Arreglos de JS");

console.log("%c1.- Si/Entonces... (IF)", style_console);
//Le indica el programa que hacer o que no en vase a una prueba lógica de verdadero falso 
let fechaActual = new Date();

console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`);

//y si la necesitamos en formato local?
const fechaLocalMX = fechaActual.toLocaleString('es-MX',
    {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute:  'numeric',
        second: 'numeric',
        hour12: false
    }
);

console.log(`en formato local (México): ${fechaLocalMX}`);

//si es antes de las doce saluda con un buenos días
if(fechaActual.getMonth()<12){
    console.log(`Buenos días, la fecha de hoy es: ${fechaLocalMX}`);   
}

//Existe un extensor de la sentencia if que es else (caso contrario)
if(fechaActual.getMonth()<=6){
    console.log(`Estas en la primera mitad del año`);   
}else{
    console.log("Estas en la segunda mitad del año");
}

//Que pasa si la validación tiene varias opciones 
const anio = fechaActual.getFullYear();
let inicioPrimavera = new Date(anio, 2, 21);
let inicioVerano = new Date(anio, 5, 21);
let inicioOtonio = new Date(anio, 8, 21);
let inicioInvierno = new Date(anio, 11, 21);

let horarioVerano = false;

if(fechaActual >= inicioPrimavera || fechaActual< inicioVerano){
    console.log("Estamos en PRIMAVERA...");
}