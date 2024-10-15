const bg ="linear-gradient(11deg, rgba(199, 0, 36, 1) 0%, rgba(0, 9, 121, 1) 33%, rgba(0, 212, 255, 1))86%";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size:1.0rem;`

console.warn("---Práctica 07: Arreglos de JS");

console.log("%c1.- Si/Entonces... (IF)", style_console);
//Le indica el programa que hacer o que no en vase a una prueba lógica de verdadero falso 
let fechaActual = new Date();
//let fechaActual = new Date(2025, 6, 5);

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
let inicioOtonio = new Date(anio, 8, 23);
let inicioInvierno = new Date(anio, 11, 21);

let horarioVerano = false;

if(fechaActual >= inicioPrimavera && fechaActual< inicioVerano){
    console.log("Estamos en PRIMAVERA...");
    console.log("Inicia la floración de muchas plantas...");
    console.log("Los días son más largos y las noches más cortas...");
    console.log("Muchos animales despiertan en la hibernación");
    estacion = "Primavera";
    horario_verano = true;
}
else if(fechaActual >= inicioInvierno && fechaActual < inicioOtonio){
    console.log("Estamos en VERANO...");
    console.log("En esta temporada abundan los días Soleados y Calurosos...");
    console.log("En esta temporada el índice de turismo vacacional sube...");
    console.log("Mucha gente busca realizar actividades al aire...");
    console.log();
    estacion = "Verano";
    horario_verano = true;
}else if(fechaActual >= inicioOtonio && fechaActual < inicioInvierno){

}
else{
    console.log("Estamos en OTOÑO...");
    console.log("Los árboles suelen cambiar de follaje");
    console.log("Se registrarán temperaturas más templadas");
    console.log("Los animales comienzan con la recolección de alimento y preparan sus espacios para la hibernación, incluso algunas aves migran");
    estacion = "Verano";
    horario_verano = true;
}

console.log("%c2.- Operador Ternario (validación?cumple:no_cumple)", style_console);

//En JS existía una operación simplificada que valida si una condición se cumple o no, y que hacer en cada caso.

let edadPersona = 18;
const mayoriaEdadMX = 18;
const mayoriaEdasUS = 21;

const evaluoMayoriaEdad = (edad) =>
    edad>18 ? "Eres mayor de edad. ": "No eres mayor de edad. "

console.log("Evaluando la mayoría de edad de una persona...");

console.log(evaluoMayoriaEdad(edadPersona));

//Sin embargo tenemos que considerar que la mayoría de edad varia en cada país por cuestiones legales, por lo que debemos considerar un segundo parámetro en la evaluación.

const evaluarMayoriaEdad = (edad, pais) =>
    (edad >= 18 && pais == "MX") ? `En ${pais} eres mayor de edad` : `En ${pais} NO eres mayor de edad`;


console.log("Evauluando la mayoría de edad de una persona en México");
console.log(evaluarMayoriaEdad(edadPersona, "MX"));

console.log("Evauluando la mayoría de edad de una persona en Estados Unidos");
console.log(evaluarMayoriaEdad(edadPersona, "US"));

console.log("%c3.- SWITCH - CASE ( Elección por valor definido)", style_console);

//Calculando tu generación en base a tu edad
let anioNacimiento = 2003;
let asignaGeneraciion = (anioNacimiento) => {
    switch (true) {
        case (anioNacimiento<1968)://Baby Boomers
        return "Baby Numbers" 
        
        case (anioNacimiento > 1968 && anioNacimiento <= 1980):
        return "Generación X";
        
        case (anioNacimiento > 1980 && anioNacimiento <= 1994):
        return "Milenials";
    
        case (anioNacimiento > 1994 && anioNacimientio <= 2010):
        return "Centenials";
    
        case (anioNacimiento > 2010):
        return "Krystal";
    
    }
}

console.log(`Dado que nació en el año 1997 soy de la generación: ${asignaGeneraciion(1982)}`);

console.log("%c4.- Manejo de Excepciones (TRY / CATCH)", style_console);

//En algunas ocasiones existirán errores que no son culpa del programa, si no del usuario, la red.
//El sol o incluso de un middleware... pero que sin duda debemos controlar para evitar las fallas de ejecución.

//TAREA: INVESTIGAR los Middlewers
console.log("Intentamos dividir: 0/10, el resultado es: ");

try{    //Intenta
    let result = 0/10; //Dividir un entero entre una letra
    console.log(result);   
}
catch(error){
    console.log("Ocurrió un error: "+ error.message);
    
}


console.log("Intentamos dividir: 10/0, el resultado es: ");
try{    //Intenta
    let result = 10/0; //Dividir un entero entre una letra
    console.log(result);   
}
catch(error){
    console.log("Ocurrió un error: "+ error.message);
    
}

console.log("Intentamos dividir: a / 10 , el resultado es: ");
try{    //Intenta
    let result = "a"/0; //Dividir un entero entre una letra
    console.log(result);   
}
catch(error){
    console.log("Ocurrió un error: "+ error.message);
    
}

console.log("Intentamos dividir: la variable a / 10 , el resultado es: ");
try{    //Intenta
    let result = a/0; //Dividir un entero entre una letra
    console.log(result);   
}
catch(error){
    console.log("Ocurrió un error: "+ error.message);
    
}

console.log("Intentamos dividir: el valor de la variable x / entre el valor de la variable y, el resultado es: ");
try{    //Intenta
    let x=8, y=2, result= x/y; //Dividir un entero entre una letra
    console.log(result);   
}
catch(error){
    console.log("Ocurrió un error: "+ error.message);
    
}
console.log("%c5.- Control de Ciclos (BREAK / CONTINUA))", style_console);

//En algunas ocaciones será importante detener un ciclo de manera abrupta

console.log("Vamos a contar del 1 al 10");
for(let num = 1; num <= 10; num++){
    console.log(num); 
}

console.log("Ahora necesitamos que si llegas al 7 pares de contar... suponiendo que sólo por hoy es de mala suerte...")
for(let num = 1; num <= 10; num++){
    if(num == 7){
        break;
    }else{
        console.log(num);
    }
}

console.log("Ahora necesitamos que si llegas al 7 te saltes ese número y continués")
for(let num = 1; num <= 10; num++){
    if(num == 7){
        continue;
    }
    console.log(num);
}
//Mensaje de la fusión: "Fusión de la rama de la Práctica N" para los exámenes 


console.log("%c6.- Ciclo Iterativo - (FOR)", style_console);
//Recorre de manera iterativa (i), de incremental o decremental
console.log("Los días de la semana son en orden ascendente son: ");
let dias = ["Domingo", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

for(let i=0; i<dias.length; i++){
    console.log(dias[i]);
}

console.log("Ahora vamos a imprimir los meses en orden descendente...");
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

for(let i= 11; i>=0; i--){
    console.log(meses[i]);
}
console.log("%c6.- Ciclo Condicionales - (WHILE)", style_console);
//Estos ciclos bucle dependen de una condición para continuar ejecutandose.

let finDeSemana = false;
let mensaje = "";
let j=0;

while(j < dias.length == true){
    let i=0;
    switch (j) {
        case 0:
            finDeSemana = true;
            mensaje = "Mormingoooooo.. ZzzzzZZZZzz";
            break;
        case 1:
            finDeSemana = false;
            mensaje = "San Lunes s chambiar...";
            break;
        case 2:
            finDeSemana = false; 
            mensaje = "Segundo dia de chamba a darle...";
            break;

        case 3: 
            finDeSemana = false;
            mensaje= "Ombligo de semana !!...";
            break;
        case 4: 
            finDeSemana = false;
            mensaje= "Ya casi ya es juevesito";
            break;
        case 5:
            finDeSemana = false;
            mensaje= "Es hoy .. es hoy... >.> <.<   ";
            break;
        case 6:
            finDeSemana = true;
            mensaje= "Sabadrink !!  ";
            break;
    }
    if(!finDeSemana){
        console.log(`Día ${j} ${dias[j]}`);
        console.log(`Mensaje del día: ${mensaje}`);
    }
    j++;
}


console.log("%c7.- Ciclo Condicionales, que se ejecuta al menos una vez - (DO WHILE)", style_console);

let episodios = [
    "Episodio 1: El comienzo",
    "Episodio 2: El segundo",
    "Episodio 3: El plotwist",
    "Episodio 4: El desenlace",
    "Episodio 5: El final"
];

let indice = 0;
let continuarViendo = true; //Esta variable simula la dirección del usuario de continuar viendo

do{
    console.log(`Reproduciendo ${episodios[indice]}`);

    //Simulamos la reproducción del episodio:
    indice++;   
    
    if(indice < episodios.length){
        continuarViendo = confirm("¿Deseas continuar el siguiente episodio?")
    }else{
        continuarViendo = false;//Cuando se acabe la lista de episodios
    }

}while (continuarViendo && indice < episodios.length) {
    console.log("Fin de la reproducción");
}


console.log("%c8.- Ciclos pararecorrer elementos finitos - (DO WHILE)", style_console);

let seriesTrending = [
    {nombre: "The Witcher", temporadas: 3, totalViewers: "1.5M", totalReprods: "3.0M"},
    {nombre: "Stranger Things", temporadas: 4, totalViewers: "6.5M", totalReprods: "10M"},
    {nombre: "The Boys", temporadas: 3, totalViewers: "3.2M"},
    {nombre: "Loki", temporadas: 2, totalViewers: "1.5", totalReprods: "250K"},
    {nombre: "Succession", temporadas: 4}
];

//Usando for.. of para recorrer la tabla 
for(let serie of seriesTrending){
    console.log(`Serie: ${serie.nombre}, Temporadas: ${serie.temporadas}`);
}

try{
    console.log(`La última serie leída fué: ${serie.nombre}`);//No va a funciomar por la variable serie ya no existe ya que su alcance solo estuvo dutrante el ciclo
}
catch(error){
    console.log("Mensaje de error: "+ error.message);
}


console.log("%c10.- Ciclos para recorrer las propiedades de elementos finitos - (FOR ... IN)", style_console);

//Usando for in para recorrrer cada serie:
for(let i in seriesTrending){
    console.log(`Serie ${parseInt(i) + 1}:`);
    for (let propiedad in seriesTrending[i]) {
        console.log(`${propiedad}: ${seriesTrending[i][propiedad]}`);
    }
    console.log('--------------------------');
}


console.log("%c11.- Ciclos ininterrumpidos para cada uno de los elementos del arreglo - (FOR EACH)", style_console);

let seriesTrending2 = [
    {nombre: "The Witcher", temporadas: 3, viewers: 8000000, reproducciones: 2500000},
    {nombre: "Stranger Things", temporadas: 4, viewers: 12000000000, reproducciones: 4000000000},
    {nombre: "The Boys", temporadas: 3, viewers: 700000, reproducciones: 22000000},
    {nombre: "Loki", temporadas: 2, viewers: 900000, reproducciones: 30000000},
    {nombre: "Succession", temporadas: 4, viewers: 6000000, reproducciones:1800000000},
    {nombre: "The Walking Dead", temporadas: 16, viewers: 16000000000, reproducciones:3600000000}
];


//Usando forEach para recorrer cada serie y calcularla calificación
seriesTrending2.forEach((serie, index) => {
    let calificacion = (serie.reproducciones / serie.viewers).toFixed(2);//Calcula la calificación y la redondea a 2 decimales.
    console.log(`Serie: ${index + 1}:`);
    console.log(`Nombre: ${serie.nombre}:`);
    console.log(`Temporadas: ${serie.temporadas}:`);
    console.log(`Viewers: ${serie.viewers}:`);
    console.log(`Reproducciones: ${serie.reproducciones}:`);
    console.log(`Calificación: ${calificacion}`);
    console.log('----------------------'); 
});

//Usando filter para filtra, y map para transformar la información.
//Lista de series que queremos verificar
let seriesDeseadas = ["The Walking Dead", "The Boys", "Loki"];

//Usando map e includes para filtrar y obtener los nombres de series con 3 temporadas.
let seriesConTresTemporadas = seriesTrending2
    .filter(serie => serie.temporadas <= 3)//Filtramos las series que tienen 3 temporadas
    .map(serie => serie.nombre)//Obtenemeos sólo los nombres de esas esas series
    .filter(nombre => seriesDeseadas.includes(nombre))//Filtramos a las que están en la lista de series deseadas

//Mostrar resultados
console.log("Series con 3 temporadas que están en la lista deseada: ");
console.log(seriesConTresTemporadas);

