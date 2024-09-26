const bg = "linear-gradient(11deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 33%, rgba(0, 212, 255, 1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold;`;


//Personalización de las salidas de consola
console.warn("---Práctica 05: Repaso de Objetos En JS");

//VARIABLES INDEPENDIENTES

console.log("%c1. - Variables Independientes ", style_console);

//DECLARAMOS VALORES INDEPENDIENTES RELACIONADOS A UN PRODUCTO
//Esto no es un objeto, son variables independientes.
let Producto_Nombre = "Computadora Laptop 1\"";
let Producto_Marca = "ASUS";
let Producto_Modelo = "TUF 17"
let Producto_Precio = 15749.50;
let Producto_Disponibilidad = true;
let Producto_SKU = Symbol("TUF707VV-HX221W")
let Producto_Stock = 15;
let Producto_Imagen = null;
let Producto_Barcode ;
let Producto_Categorias = ["Electrónicos", "Computación", "Gaming", "Promociones Buen Fin", "Mejor Valotrados"]


//Accedemos a los valores de las características del producto de manera independiente
console.log(`Los datos del PRODUCTO son: \n"
    Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca}, Tipo de Dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de Dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio}, Tipo de Dato <${typeof(Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilidad},Tipo de Dato <${typeof(Producto_Disponibilidad)}>
    Stock: ${Producto_Stock}, Tipo de Dato <${typeof(Producto_Stock)}>
    Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof(Producto_Imagen)}>
    Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof(Producto_Barcode)}>
    Categorias: ${Producto_Categorias}, Tipo de Dato <${typeof(Producto_Nombre)}>`);

    console.log("En el caso del SKU al ser un symbol, no se puede concatenar a la cadena de impresión anterior");
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));

    //Ahora lo declaramos como un objeto
    console.warn("%c2. - Variables Independientes ", style_console);

    let Producto =
    {
        ID: 3216,
        Nombre : "Tenis Deportivos",
        Marca: "Nikes",
        Modelo: "Jordan '24",
        Precio: 3361.25,
        Disponibilidad: false,
        Stock: 0,
        SKU: "DZ5485-612",
        Imagen: "../ruta/sajkfdsf/uksqbhkjskjs/mksnfjnds",
        Barcode: null,
        Categorias: ["Deportes", "Tenis", "Juvenil"]
    }

    //Ahora leemos el objeto completo
    console.table(Producto);
    

    //Para acceder a las propiedades del objeto usmaos un "." y el nombre de la propiedad a leer.

    console.log("Accediendo a las propiedades especificas del producto");
    console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`);
        console.log(`Precio: ${Producto.Precio}`);
        if (Producto.Disponibilidad == 0) {
            console.log(`Estatus: Agotado`)    
        }else{

        }
        
    //INVESTIGA LA DESESTRUCTURACIÓN DE OBJETOS, TE VA A AYUDAR. Y ES TAREA.

    //DESESTRUCTURACIÓN DE DATOS

    console.warn("%c3. - Desestructuración de un objeto ", style_console);    
    
    let Producto2 =
    {
        Clave: 3216,
        Nombre : "Lentes Deportivos",
        Marca: "Oakley",
        Modelo: "QNTM Kato",
        Precio: 6829.00,
        Disponibilidad: true,
        Stock: 5,
        SKU: "009481D-0356",
        Imagen: "../ruta/gghgfjfsf/uioymhbjs/mnbvmxvm",
        Barcode: 888392491626,
        Categorias: ["Deportes", "Lentes", "Hombre", "Accesorios"]
    }


    let Comprador =
    {
        Clave: 3216,
        Nombre : "Daniel de J.",
        Apellido: "Bravo Godinez",
        Tipo: "Frecuente",
        Correo: "blacktemplehood@gmail.com",
        PaisOrigen: "México",
        SaldoActual: 14000.00

    }

    let Pedido = 
    {
        ID: 5816,
        Producto_Clave: 316,
        Comprador_Clave: 3216,
        Cantidad: 2,
        Estatus: "Carrito de Compra",
        TipoPago: "Tarjeta de Crédito"

    }

    //En base de a llos 3 objetos necesitamos calcular el costo de la compra y si le alcanza con sus saldo a favor

    let {Precio: Producto_Precio2} = Producto2;
    let {Cantidad: Pedido_Cantidad} = Pedido;
    let {SaldoActual: Cliente_SaldoActual} = Comprador;
    let Costo_Compra = Producto_Precio2 * Pedido_Cantidad;

    
    console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de: ${(Pedido_Cantidad * Producto_Precio)}`);
    if (Costo_Compra < Cliente_SaldoActual) {
        console.log("El cliente tiene saldo suficiente");
    }
    
    //PRÁCTICA 4 fusionada con los 8 tipos de datos.
    //Hacer commit si te salió todo esto.

    console.warn("---Desestructuración de un Objeto ");
    

    //TAREA
    //Que es la desestructuración de objetos y las mutaciones de objetos, y que es la inmutabilidad

    console.log("%c3. - Actualización de las variables de un objeto", style_console);

    console.log(`El objeto actualmente tiene los siguientes valores:`);
    //Problemas con la referencia 
    console.log(JSON.stringify(Producto2, null, 2));
    //Convierte el objeto a una cadena basta con igualar al nuevo valor de la propiedad
    console.log(`Por cuestiones de inflación el costo del producto ha cambiado y debe ser actualizado... de $6829.00 a $6915.50`);

    //Para polificiar el valor de un objeto basta con igualar el nuevo valor de la propiedad deseada 
    Producto2.Precio = 6915.50;
    console.log(`Los nuevos valores del objeto son:`);
    console.log(Producto2);
    
    
    //¿PUEDO CAMBIAR NO SOLO EL VALOR SINO EL TIPO DE DATO DE UN OBJETO EN JS?
    console.warn("---------------------------------------------------");
    console.log(`El objeto actualmente tiene los siguientes valores:`);
    let tipoDisponibilidad = typeof(Producto.Disponibilidad);
    console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`);
    console.log(JSON.stringify(Producto2, null, 2));    //Disponibilidad booleano
    Producto2.Disponibilidad = "Si";
    let nuevoTipoDisponibilidad = typeof(Producto2.Disponibilidad);
    console.log(Producto2);
    console.log(`El tipo de dato de la disponibilidad es: ${nuevoTipoDisponibilidad}`);
    

    //Agrupar nueva propiedad al objeto
    console.log("%c5. - Agregar nuevas propiedades al Objeto", style_console);
    //Para agregar una nueva propiedad utilizaremos el nombre del objeto los corchetes [] y el nuevo de la propiedad con su valor por defecto
    Comprador[`Dirección`] = "Av. Benito Juárez No. 1525, Interior 4D, Xicotepec de Juárez, Puebla, México"
    Comprador[`Tipo`] = "Nuevo Cliente";
    Comprador[`ActividadReciente`] = true
    Comprador[`TotalCompra`] = 3516.25
    console.log("Después de haber agregado las propiedades Dirección, Tipo, ActividadReciente y TotalCompras...");
    console.table(Comprador);

    //Eliminar las propiedades de un Objeto
    console.log("%c5. - Eliminar las propiedades de un Objeto", style_console);
    console.log("La estructura y valores del objeto PEDIDO son previos son previos al modificable");

    console.table(Pedido);
    delete Pedido.TipoPago;
    console.log("Después de la modificación");
    console.table(Pedido);

    console.log("%c7. - Métodos para controlar la mutabilidad de los objetos. CONGELACIÓN (FREEZE)", style_console);
    
    //Si queremos no permitir que los objetos no sean modificados ni en estructura, ni en valor, usamos el método FREEZE (congelar)
    console.log(`La estructura del comprador es: `);
    console.table(Comprador);
    Object.freeze(Comprador);
    //Intentamos agregar, eliminar o modificar los valores de sus propiedades

    Comprador.FechaUltimaCompra = "05/09/2024 10:15:25"
    delete Comprador.Tipo;
    Comprador.Dirección= "calle 16 Septiembre #102, Col. Manantiales, Huauchinango Puebla";
    console.log(`Verificamos si se realizaron los cambios en el objeto COMPRADOR: `);
    console.table(Comprador);


    console.log("%c8. - Métodos para controlar la mutabilidad de los objetos. SELLADO (SEAL)", style_console);

    //Sin embargo, en el caso que desemos poder modificar los valores de las propiedades del Objeto, pero no su estructura, usamos SEAL
    console.log("Objeto antes de ser modificado: ");
    console.table(Pedido);
    //Sellamos el objeto
    Object.seal(Pedido);
    //Intentamos modificar su estructura
    Pedido['FechaPedido'] = "25/09/2024 11:05:03"
    delete Pedido['Cantidad'];
    console.log('Verificamos si se realizaron los cambios en el Objeto PEDIDO:');
    console.table(Pedido);

    //Ahora intentamos modificar el valor de las propiedades
    Pedido.Cantidad = 5
    console.log('Verificamos si se realizaron los cambios en el Objeto PEDIDO:');
    console.table(Pedido);
    //----------------------------------------------------------------------------------RETO: HACER UN OBJETO PARCIALMENTE MUTABLE 
    /*let Reto = {
        Descripción: "Crear un objeto parcialmenet mutable",
        Matricula: 220397
    },
        Alumno: Object.freeze({
            Nombre: "Daniel de Jesús",
            Apellido: "Bravo Godínez"
        });
    console.table(Reto);

    Object.seal(Reto);
    Object.freeze(Reto.Alumno);
    Object.freeze(Reto.Matricula)
    Reto.Descripción = "CREO YO QUE SALIÓ ESTE ROLLO"; 
    Reto.Alumno = "Diego Mota"; 
    Reto.Matricula = 230569; 

    console.log('Mando a invocar Objeto Reto:');
    console.table(Reto);*/
    //-----------------------------------------------------------------------------------

    //Desestructuración de 2 o más Objetos
    console.log("%c9. - Desestructuración de 2 o más Objetos", style_console);
    let {Precio: productoPrecio, Marca: productoMarca} = Producto
    let {Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, Tipo: clienteTipo} = Comprador

    //Transformamos valores cuantitativos en cualitativos
    if(productoPrecio = 2000)
        productoPrecio = "caro"
    else
        productoPrecio = "Barato"

    if(clienteSaldo > 0)
        clienteSaldo = "A favor"
    else if(clienteSaldo < 0)
        clienteSaldo = "En contra"
    else
        clienteSaldo = "Sin deudas"

    //Transformar valores cualitativos en cuantitativos
    let ClienteNivel;

    if(clienteTipo == "Premium")
        ClienteNivel = 1
    if(clienteTipo == "Premium")
        ClienteNivel = 2
    if(clienteTipo == "No identificado")
        ClienteNivel = 3

    //Clasificamos al cliente por su PAIS DE ORIGEN
    if(clientePais == "México")
        clientePais = "Nacional"
    else
        clientePais="Extranjero"


    //OLE - Object Literal Enhacement

    let datosClientePromociones ={clienteCorreo, clientePais, ClienteNivel, clienteSaldo, productoMarca, productoPrecio}

    //El nuevo objeto que creamos sería un ejempolo de la información que enviaremos al área de Marketing para la difusión de promociones
    console.log("Los datos del cliente y sus hábitos de compra son: ");
    console.table(datosClientePromociones);
    

    //Operaciones sobre Objetos
    //Unión de Objetos
    console.log("%c10.- Unión de Objetos usando el método de asignación (ASSING)", style_console);

    console.log("Imprimimos la estructura y valores del Objeto PRODUCTO");
    console.table(Producto  );
    console.log("Imprimimos la estructura y valores del Objeto PEDIDO");
    console.table(Pedido);
    //Suponiendo que el usuario ya realizó el pago el pedido se convertira en una VENTA que requiere información de ambos objetos
    const Venta = Object.assign(Producto, Pedido);
    console.log("Consultamos este nuevo objeto VENTA");
    console.table(Venta);
    
    