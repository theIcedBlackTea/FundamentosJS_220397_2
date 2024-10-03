//Repaso de Arreglos
//Estilización de los mensajes de salida 
const bg ="linear-gradient(11deg, rgba(199, 0, 36, 1) 0%, rgba(0, 9, 121, 1) 33%, rgba(0, 212, 255, 1) 86%";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size:1.0rem;`;

console.warn("---Práctica 06: Arreglos de JS");

//Para declarar un arreglo (array) de datos en JSbasta con comenzar agregar [], y dentro los datos que contendrá el arreglo

const mesesAnio = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("%c1.- Declaración de un arreglo", style_console);

console.log(mesesAnio);
console.table(mesesAnio);

//Acceder a los valores de un arreglo de datos basta con enviar la posición del dato que queremos dentro de los límites establecidos.
//Siendo el límite inferior 0 y superior tamaño -1
console.log("%c2.- Leer o recuperar los datos de un array ", style_console);
console.log(`El primer mes del año es: ${mesesAnio[0]}`);
console.log(`El último mes del año es: ${mesesAnio[mesesAnio.length-1]}`);
//No se pueden acceder a elementos con posiciones negativas o superiores al tamaño del array.

console.log(`El mes del año en la posición -1 es: ${mesesAnio[-1]}`);
console.log(`El treceavo mes del año en la posición es: ${mesesAnio[12]}`);

console.log(`¿Qué tipo de dato es un arreglo? : ${typeof(mesesAnio)}`);

//Al ser JS un lenguaje debilmente tipado podemos crear arreglos mixtos de tipos de datos

let arregloMixto = [
    "String",
    5,
    45.26,
    -200,
    -0.16854,
    Symbol("MARH"),
    'z',
    false,
    BigInt(111222222333444555666777),
    true,
    { latitud: "20° 10' 0\" N", longitud: "97° 58' 0\" W", altitud: 796 },
    saludar = null
];

//Mostramos el contenido del objeto
console.log(arregloMixto);
console.table(arregloMixto);
console.log(typeof(arregloMixto));

console.log("Verificamos los tipos de datos de los elementos del arreglo");
console.log(`El dato en la posición [0] =  ${arregloMixto[0]} y es del tipo ${typeof(arregloMixto[0])}`);
console.log(`El dato en la posición [1] =  ${arregloMixto[1]} y es del tipo ${typeof(arregloMixto[1])}`);
console.log(`El dato en la posición [2] =  ${arregloMixto[2]} y es del tipo ${typeof(arregloMixto[2])}`);
console.log(`El dato en la posición [3] =  ${arregloMixto[3]} y es del tipo ${typeof(arregloMixto[3])}`);
console.log(`El dato en la posición [4] =  ${arregloMixto[4]} y es del tipo ${typeof(arregloMixto[4])}`);
console.log(`El dato en la posición [5] =  ${arregloMixto[5].toString} y es del tipo ${typeof(arregloMixto[5])}`);
console.log(`El dato en la posición [6] =  ${arregloMixto[6]} y es del tipo ${typeof(arregloMixto[6])}`);
console.log(`El dato en la posición [7] =  ${arregloMixto[7]} y es del tipo ${typeof(arregloMixto[7])}`);
console.log(`El dato en la posición [8] =  ${arregloMixto[8]} y es del tipo ${typeof(arregloMixto[8])}`);
console.log(`El dato en la posición [9] =  ${arregloMixto[9]} y es del tipo ${typeof(arregloMixto[9])}`);
console.log(`El dato en la posición [10] =  ${arregloMixto[10]} y es del tipo ${typeof(arregloMixto[10])}`);
console.log(`El dato en la posición [11] =  ${arregloMixto[11]} y es del tipo ${typeof(arregloMixto[11])}`);
console.log(`El dato en la posición [12] =  ${arregloMixto[12]} y es del tipo ${typeof(arregloMixto[12])}`);

console.log("%c3.- Arreglos multidimensionales (Matrices)", style_console);

//Una matriz es una estructura de datos multidimensional (TABLA) de n columnascolumnas o m filas

let matriz = [[1,2,3,4],['a','b','c','d']]
console.log(matriz);
console.table(matriz);

console.log("Declarando una matriz irregular");

const matrizIrregular = [["Juan", "Pedro", "Maria", "Inés"],
[true, false, null],
[9.2]]

console.log(matrizIrregular);
console.table(matrizIrregular);

//Accediendo a los valores de una matriz
console.log("Leyendo las Propiedades de una Matriz Regular");
console.log(`Elemento en la posición [0][0]: ${matriz[0][0]}`);
console.log(`Elemento en la posición [1][2]: ${matriz[1][2]}`);

//Accediendo a los valores de una matriz
console.log("Leyendo las Propiedades de una Matriz Irregular");
console.log(`Elemento en la posición [0][0]: ${matrizIrregular[0][0]}`);
console.log(`Elemento en la posición [2][0] (Promedio Juan): ${matrizIrregular[2][0]}`);
console.log(`Elemento en la posición [1][2] (Es María mayor de edad): ${matrizIrregular[1][2]}`);

//Funciones y Métodos de Arreglos
//Los métodos dde un objeto siempre son invocados usando un ".",y al término se delimitan los parámetros entre (), en caso de que no lleve ()
//No es un método sino una propiedad

console.log("%c4.- Funciones o Métodos de los Arreglos", style_console);
console.log("¿Cómo saber cuál es el tamaño de un arreglo?");
console.log(`mesesAnio es un arreglo de tamaño: ${mesesAnio.length}`);
console.log(`arregloMixto es un arreglo de tamaño: ${arregloMixto.length}`);

console.log("¿Qué pasa con los arreglos multidimensionales?");
console.log(`matriz es un arreglo de tamaño: ${matriz.length}`);
console.log("mmm, eso me da el tamaño de número de filas de la matriz, pero como saber el número de columnas");
console.log(`la matriz regular tiene un número de: ${matriz[0].length}`);

console.log("¿Y para las irregulares?")
//Para saber la dimensión de una matriz irregular podemos hacer el uso del ciclo
let numeroFilas = matrizIrregular.length
for(let i = 0; i<numeroFilas; i++){
    console.log(`La longitud de la fila ${[i]} es => ${matrizIrregular[i].length}`);
    
}

console.log("%c5.- Agregar un nuevo elemento a un arreglo (PUSH)", style_console);

let estudiantes = ["Angel Rufino", "Idal Vargas", "Daniel Bravo", "Esther González", "Ailton Artiaga"]

console.log("Los elementos actuales del arreglo son: ");
console.table(estudiantes);
console.log("Agregamos un nuevo estudiante llamdado: Abril Guzmán");
estudiantes.push("Abril Guzmán");
console.log("Después de agregar los elementos del arreglo son: ");
console.table(estudiantes);
//LA FUNCIÓN PUSH SIEMPRE AGREGA EL ELEMENTO EN LA ÚLTIMA POSICIÓN

console.log("¿Qué pasa con los Mixtos?");
console.log("El arregloMixto actualmente tiene los siguientes elementos: ");
console.table(arregloMixto);
console.log("Agregamos la palabra \"Hola\" como nuevo elemento: ");
arregloMixto.push("Hola");
console.table(arregloMixto);
console.log("Y también argregamos el número -31213553561564.541651531, siendo este un BigInt");
arregloMixto.push(BigInt(-3121352454744453561564.541632134343451531));
console.log("Mostramos el \"arregloMixto\" con las adiciones: ");
console.table(arregloMixto);


console.log("%c6.- Agregar un nuevo elemento a un arreglo (UNSHIFT) en la posición inicial", style_console);
console.table(estudiantes);
console.log("Ahora agreguemos a Abishai Flores, al comienzco del arreglo:");
estudiantes.unshift("Abishai Flores");
console.log("Mostramos arreglo estudiantes después de la modificación: ");
console.table(estudiantes);

console.log("%c7.- Eliminar el elemento de un arreglo en  posición (POP)", style_console);
console.log("El arreglo tiene los siguientes elementos: ");
console.table(estudiantes);
console.log("Para este caso eliminaremos a Abril Guzmán, en la última posición.");
estudiantes.pop();
console.log("Después de eliminar el elemento del arreglo quedó de la sig. manera");

console.log("%c8.- Eliminar el elemento de un arreglo en primera posición (SHIFT)", style_console);
console.log("El arreglo tiene los siguientes elementos: ");
console.table(estudiantes);
console.log("Para este caso eliminaremos a Abishai Flores, en la primera posición.");
estudiantes.shift();
console.log("Después de eliminar el elemento del arreglo quedó de la sig. manera");


console.log("%c9.- Dividir un arreglo en un arreglo nuevo con posiciones definidas (SPLICE)", style_console);
console.log("Arreglo actual:");
console.table(estudiantes)
console.log("Dividir el arreglo en uno nuevo eliminando ciertos elementos en base a su posición");
//CUANDO LA FUNCIÓN SPLICE RECIBE un sólo parámetro de los elementos de esta posición en adelante
estudiantes.splice(2)
console.table(estudiantes);


//Cuando splice recibe 2 parámetros elimina todos los elementos que no estén en ese rango
estudiantes.push("Zyanya Zacatenco");
estudiantes.push("Tania Ibarra");
estudiantes.push("Juvenal Viveros");
estudiantes.push("Marcos Ríos");
estudiantes.push("Jonathan Baldemar");
console.log("Se han agregado 5 nuevos estudiantes, por lo que el arreglo es: ");
console.table(estudiantes);
console.log("Ahora ya tenemos los elementos suficientes para aplicar el métodosplice con dos parámetros que serán 3,5");
estudiantes.splice(3,5)
console.log("Resultado en :");
console.table(estudiantes);


console.log("Ahora vamos a insertar a \"Antonio Ocpaco\ en los elementos de la posición 0 y 1.");
estudiantes.splice(1,0, "Antonio Ocpaco")
console.table(estudiantes);

//TRambién splice sirve para reemplazar elementos por otros, en este caso reemplazaremos a Angel por Brandon

console.log("Ahora vamos a insertar a \"Angel Rufino\ en los elementos de la posición 0 y 1.");
estudiantes.splice(0,1, "Brandon Leon")
console.table(estudiantes);

//DESESTRUCTURACIÓN DE OBJETOS Y LAS FUNCIONES LAMBDA (ANÓNIMAS O FLECHA) TAREAAAA
console.log("%c10.- Métodos para la manipulación de arreglos INMUTABLES", style_console);


let signosZodiacales = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Picis" ]

//DESESTRUCTURACIÓN DE OBJETOS

let [signo1, , signo3, signo4, , , signo7 , , , ,] = signosZodiacales
console.log(`El primer signo zodiacal es: ${signo1}`);
console.log(`El tercer signo zodiacal es: ${signo3}`);
//console.log(`El cuarto signo zodiacal es: ${signo4}`);
console.log(`El séptimo signo zodiacal es: ${signo7}`);

//Congelamos el objeto de 
Object.freeze(signosZodiacales);