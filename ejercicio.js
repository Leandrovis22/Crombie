/*         Primero creamos un arreglo de productos que contengan, inventario, precio, marca y nombre.
        Luego creemos la siguientes funciones:
        Función que reciba por parámetro una marca y devuelva un arreglo de productos de esa marca.
        Función que reciba por parámetro un precio y devuelva un arreglo de productos con precios mayores al recibido por parámetro.
        Función que cambie el nombre de una marca. Por ejemplo, queremos cambiar los de marca Walmart a ChangoMas.
        Función que devuelva la suma de todos los precios, el promedio, el máximo y el mínimo. */


const productos = [
    { precio: 553, inventario: 87, marca: "walmart", nombre: "Leche" },
    { precio: 244, inventario: 59, marca: "walmart", nombre: "Queso" },
    { precio: 340, inventario: 92, marca: "walmart", nombre: "Yogur" },
    {
        precio: 169,
        inventario: 18,
        marca: "walmart",
        nombre: "Mantequilla",
    },
    { precio: 758, inventario: 25, marca: "walmart", nombre: "Crema" },
    { precio: 870, inventario: 21, marca: "walmart", nombre: "Helado" },
    { precio: 82, inventario: 54, marca: "walmart", nombre: "Natilla" },
    {
        precio: 568,
        inventario: 67,
        marca: "walmart",
        nombre: "Leche condensada",
    },
    {
        precio: 536,
        inventario: 31,
        marca: "walmart",
        nombre: "Yogur griego",
    },
    {
        precio: 307,
        inventario: 57,
        marca: "walmart",
        nombre: "Queso crema",
    },
    { precio: 976, inventario: 80, marca: "walmart", nombre: "Nata" },
    { precio: 904, inventario: 19, marca: "walmart", nombre: "Flan" },
    {
        precio: 167,
        inventario: 60,
        marca: "walmart",
        nombre: "Yogur de frutas",
    },
    {
        precio: 525,
        inventario: 56,
        marca: "walmart",
        nombre: "Leche evaporada",
    },
    {
        precio: 246,
        inventario: 32,
        marca: "walmart",
        nombre: "Helado de vainilla",
    },
    {
        precio: 785,
        inventario: 27,
        marca: "walmart",
        nombre: "Leche de almendras",
    },
    {
        precio: 286,
        inventario: 24,
        marca: "walmart",
        nombre: "Queso rallado",
    },
    {
        precio: 585,
        inventario: 48,
        marca: "walmart",
        nombre: "Yogur de fresa",
    },
    {
        precio: 84,
        inventario: 46,
        marca: "walmart",
        nombre: "Crema agria",
    },
    {
        precio: 804,
        inventario: 2,
        marca: "changomas",
        nombre: "Helado de chocolate",
    },
    ];

   
/*     const devuelveArregloDeMarca = (marca) => {
    const arregloDeMarca = [];
    for (let i = 0; i < productos.length; i++) {
    
    if (productos[i].marca === marca) arregloDeMarca.push(productos[i]);
    
    
    }

    return arregloDeMarca;}
    
    
    console.log("Devuelve walmart", devuelveArregloDeMarca("walmart"));
    console.log("Devuelve chango mas", devuelveArregloDeMarca("changomas")); */

/*     Función que reciba por parámetro un precio y devuelva un arreglo de productos con precios mayores al recibido por parámetro. */

/* const devuelveArregloDePrecios = (precio) => {
    const arregloDeprecio = [];
    for (let i = 0; i < productos.length; i++) {
    
    if (productos[i].precio > precio) arregloDeprecio.push(productos[i]);
    
    }

    return arregloDeprecio;}
    
    
    console.log("arreglo de precio mayor que $200", devuelveArregloDePrecios(200));
     */
/* 
    Función que cambie el nombre de una marca. Por ejemplo, queremos cambiar los de marca Walmart a ChangoMas. */

    