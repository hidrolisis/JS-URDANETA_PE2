// ...(((((PRE ENTREGA NRO 2 ENTRENADOR PERSONAL)))))

let nombre = prompt("¡Hola! Bienvenido a Tu Menu personal. Por Favor Indicanos tu nombre");
alert("Un gusto tenerte con nosotros " + nombre, + " Ahora haz click en aceptar para comenzar");
alert("Bien este tomador de ordenes te orientara para crear tu plato favorito," + " Pulsa aceptar para continuar.");

const proteina = [
    { /* id: 1,*/ ingrediente: 'pollo', precio: 4000 },
    { /*id: 2,*/ ingrediente: 'cerdo', precio: 3500 },
    { /*id: 3,*/ ingrediente: 'pescado', precio: 4000 },
]
const agregado = [
    { /*id: 4,*/ ingrediente: 'arroz', precio: 500 },
    { /*id: 5,*/ ingrediente: 'fideo', precio: 600 },
]

const plato = proteina.concat(agregado)
console.log(plato)


const resultado = proteina.find((el) => el.ingrediente === "pollo")
const resultado2 = proteina.find((el) => el.ingrediente === "cerdo")
const resultado3 = proteina.find((el) => el.ingrediente === "pescado")
const resultado4 = agregado.find((el) => el.ingrediente === "arroz")
const resultado5 = agregado.find((el) => el.ingrediente === "fideo")

console.log(resultado) 
console.log(resultado2) 
console.log(resultado3)
console.log(resultado4)
console.log(resultado5)

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