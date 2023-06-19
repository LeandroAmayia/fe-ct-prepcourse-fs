/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   if(x === y){// Retorna true si "x" e "y" son iguales.
      return true;
   }else { // De lo contrario, retorna false.
      return false; // Tu código:
   } 
}


function tienenMismaLongitud(str1, str2) {
   
      // Retorna true si los dos strings tienen la misma longitud.
      // De lo contrario, retorna false.
      // Tu código: 
      return str1.length === str2.length;  
}

function menosQueNoventa(num) {
   if (num < 90){ // Retorna true si el argumento "num" es menor que noventa.
      return true;
   }else {  // De lo contrario, retorna false.
      return false; // Tu código:
   }
}

function mayorQueCincuenta(num) {
   if(num > 50){ // Retorna true si el argumento "num" es mayor que cincuenta.
      return true;
   }else{ // De lo contrario, retorna false.
      return false;  // Tu código:
   } 
}

function esPar(num) {
   if(num % 2 === 0){ // Retorna true si "num" es par.
      return true;
   }else{ // De lo contrario, retorna false.
      return false; // Tu código:
   }  
}

function esImpar(num) {
   if(num % 2 === 1){ // Retorna true si "num" es impar.
      return true;
   }else{  // De lo contrario, retorna false.
      return false; // Tu código:
   } 
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
