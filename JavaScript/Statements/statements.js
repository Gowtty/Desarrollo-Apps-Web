let x, y, z;  // Declaracion de variables en JS
x = 5;         // Asignacion de valores
y = 6;        
z = x + y;     // Ejemplo de suma de valores

// En JS los espacios en blancos no son obligatorios
let variable1 = "Ejemplo";
let variable2="Ejemplo";
//Esto seria equivalente
// Al igual que poner espacios entre operadores es buena practica, no es obligatorio
x+y;
//es igual que
x + y;

//Si una linea es muy larga y hace el codigo menos entendible, puedes usar saltos de linea sin problemas
//Cuidando siempre que la separacion sean operadores
document.getElementById("Ejemplo").innerText = 
"Si una linea es muy larga y hace el codigo menos entendible, puedes usar saltos de linea sin problemas";

//En JS existen los bloques de codigo, un ejemplo muy comun son las funciones
function funcionEjemplo(){
    document.getElementById("Ejemplo").style.textAlign = "center";
    document.getElementById("Ejemplo").style.color = "blue";
}
// Tambien existen funciones que realizan calculos
function sumarNumeros(a, b){
    let suma = a + b;
    return suma;
}

console.log(sumarNumeros(1,3));

// Este codigo se va a ejecutar siempre junto, es un bloque que tiene un cierto numero de instrucciones que va a ejecutar al ser llamado
