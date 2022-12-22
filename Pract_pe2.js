// ...(((((PRE ENTREGA NRO 2 ENTRENADOR PERSONAL)))))

let nombre = prompt("¡Hola! Bienvenido a Tu Menu personal. Por Favor Indicanos tu nombre");
alert("Un gusto tenerte con nosotros " + nombre, + " Ahora haz click en aceptar para comenzar");
alert("Bien este tomador de ordenes te orientara para crear tu plato favorito," + " Pulsa aceptar para continuar.");

let proteina = [{ id: 1, producto: "pollo", precio: 4000 }, { id: 2, producto: "cerdo", precio: 3500 }, { id: 3, producto: "pescado", precio: 4000 }];
let contorno = [{id: 4, producto: "arroz", precio: 500}, {id: 5, producto: "fideos", precio: 300}, {id: 6, producto: "papas", precio: 550}];

let opcion1 = ""
let opcion2 = ""
let precio1 = ""
let precio2 = ""

do {
    opcion1 = prompt("Indique el nro del menu deseado: \n 1 - Pollo \n 2 - Cerdo \n 3 - Pescado");

    function precioMenu(a, b) {
        return a + b;
    }

    var resultado = precioMenu(precio1, precio2)
    console.log(resultado)

    
    
    if (opcion1 == 1) {
        let opcion1 = "Pollo";
        let precio1 = proteina.precio;
        alert(proteina.precio);
        // alert("Usted selecciono " + opcion1 + ", " + "precio: " + precio1);
    } else if (opcion1 == 2) {
        let precio1 = proteina[1][4];
        let opcion1 = "Cerdo";
        alert("Usted selecciono " + opcion1 + ", " + "precio: " + 3500);
    } else if (opcion1 == 3) {
        let precio1 = proteina[2][4];
        let opcion1 = "Pescado";
        alert("Usted selecciono " + opcion1 + ", " + "precio: " + 4000);
    }

    opcion2 = prompt("Indique el CONTORNO deseado:  \n 4 - Arroz \n 5 - Fideos \n 6 - Papas \n 0 - salir");

    if (opcion2 == 4) {
        let precio2 = contorno[0][4];
        let opcion2 = contorno[0][1];
        alert("Usted selecciono " + contorno[0][1] + ", " + "precio: " + contorno[0][3]);
    } else if (opcion2 == 5){
        let precio2 =contorno[1][4]; 
        let opcion2 = contorno[1][1];
        alert("Usted selecciono " + contorno[1][1] + ", " + "precio: " + contorno[1][3]);
    } else if (opcion2 == 6) {
        let precio2 =contorno[2][4];
        let opcion2 = contorno[2][1];
        alert("Usted selecciono " + contorno[2][1] + ", " + "precio: " + contorno[2][3]);
    } 
    
    alert("Su menu es " + opcion1 + " con " + opcion2 + ", " + "Y el total de su cuenta es: " + resultado);
    alert("Gracias por visitarnos");

} while (opcion2 != 0);

// \n 4 - Arroz \n 5 - Fideos")
// function calcularTotal(a,b) {
//     // Recorremos el array del carrito 
//     return carrito.reduce((total, item) => {
//         // De cada elemento obtenemos su precio
//         const miItem = baseDeDatos.filter((itemBaseDatos) => {
//             return itemBaseDatos.id === parseInt(item);
//         });
//         // Los sumamos al total
//         return total + miItem[0].precio;
//     }, 0).toFixed(2);
// }