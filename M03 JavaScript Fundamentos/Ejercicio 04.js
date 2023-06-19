/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   var res = Math.pow(num,2); // Retorna el valor de "num" elevado al cuadrado.
   return res; // Tu código:
}

function elevarAlCubo(num) {
   var res = Math.pow(num,3); // Retorna el valor de "num" elevado al cubo.
   return res; // Tu código:
}

function elevar(num, exponent) {
   var res = Math.pow(num,exponent); // Retorna el valor de "num" elevado al exponente "exponent".
   return res; // Tu código:
}

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   return Math.round(num);
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   return Math.ceil(num); 
}

function numeroRandom() {
   var res = Math.random(); // Genera un número al azar entre 0 y 1 y retórnalo.
   return res; // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
