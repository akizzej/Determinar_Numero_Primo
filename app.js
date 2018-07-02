/*Crea una función que determine si un número es primo. En matemáticas, un número primo es un número natural mayor que 1 que tiene únicamente dos divisores distintos: él mismo y el 1.

Tips:

Utilizar el operador modulo (%) para determinar si un número es divisor de otro.*/
function numeroPrimo(num){
    // numeros primos 2 3 5 7 11 13 17 19 23 29
    let primo = true;
    for (let i=2; i< num; i++){
        if (num % i ===0)
        primo = false;
        //retornaria true
        
    }
    if(primo===true){
    console.log("Es primo!!!")
    }else {
        console.log("no es primo!!!")

    }
}
numeroPrimo(409);// llamo la funcion y le paso un numero para 5 debe imprimir que es primo