/*Crea una función que determine si un número es primo. En matemáticas, un número primo es un número natural mayor que 1 que tiene únicamente dos divisores distintos: él mismo y el 1.

Tips:

Utilizar el operador modulo (%) para determinar si un número es divisor de otro.*/
function numeroPrimo(num){
    // numeros primos 2 3 5 7 11 13 17 19 23 29
    for (let i=2; i< num; i++){
        if (num % i ===0)
        //retornaria false
        return false;
    }
}
console.log(numeroPrimo(3));