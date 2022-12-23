// ...(((((PRE ENTREGA NRO 2 JS MENU PERSONAL)))))

let nombre = prompt("¡Hola! Bienvenido a Tu Menu personal. Por Favor Indicanos tu nombre");
alert("Un gusto tenerte con nosotros " + nombre, + " Ahora haz click en aceptar para comenzar");
alert("Bien este tomador de ordenes te orientara para crear tu plato favorito," + " Pulsa aceptar para continuar.");

let proteina = [
    { id: 1, producto: "Pollo", precio: 4000 },
    { id: 2, producto: "Cerdo", precio: 3500 },
    { id: 3, producto: "Pescado", precio: 4000 }
];

let contorno = [
    { id: 4, producto: "Arroz", precio: 500 },
    { id: 5, producto: "Fideos", precio: 300 },
    { id: 6, producto: "Papas", precio: 550 }
];

let opcion1 = ""
let opcion2 = ""
let precio1 = ""
let precio2 = ""

do {
    opcion1 = prompt("Indique el nro del menu deseado: \n 1 - Pollo \n 2 - Cerdo \n 3 - Pescado");

    if (opcion1 == 1) {
        opcion1 = proteina[0].producto;
        precio1 = proteina[0].precio;
        alert("Usted selecciono " + opcion1 + ", " + "precio: " + precio1);
        
    } else if (opcion1 == 2) {
        opcion1 = proteina[1].producto;
        precio1 = proteina[1].precio;
        alert("Usted selecciono " + opcion1 + ", " + "precio: " + precio1);
    } else if (opcion1 == 3) {
        opcion1 = proteina[2].producto;
        precio1 = proteina[2].precio;
        alert("Usted selecciono " + opcion1 + ", " + "precio: " + precio1);
    }

    opcion2 = prompt("Indique el CONTORNO deseado:  \n 4 - Arroz \n 5 - Fideos \n 6 - Papas \n 0 - salir");

    if (opcion2 == 4) {
        precio2 = contorno[0].precio;
        opcion2 = contorno[0].producto;
        alert("Usted selecciono " + opcion2 + ", " + "precio: " + precio2);
    } else if (opcion2 == 5){
        precio2 =contorno[1].precio; 
        opcion2 = contorno[1].producto;
        alert("Usted selecciono " + opcion2 + ", " + "precio: " + precio2);
    } else if (opcion2 == 6) {
        precio2 =contorno[2].precio;
        opcion2 = contorno[2].producto;
        alert("Usted selecciono " + opcion2 + ", " + "precio: " + precio2);
    } 
    
    function precioMenu(precio1, precio2) {
        return precio1 + precio2;
    }

    var resultado = precioMenu(precio1, precio2)

    alert("Su menu es " + opcion1 + " con " + opcion2 + ", " + "Y el total de su cuenta es: " + resultado);
    alert("Gracias por visitarnos ");
    opcion2 = prompt("Pulse ENTER para salir")

} while (opcion2 != 0);