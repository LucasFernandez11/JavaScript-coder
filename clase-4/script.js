//funciones 
const primos = (num) =>{
    let resultado;
    let contador=0;
    for (let i = 1; i <= num; i++) {
        if(num % i == 0){
            contador ++;
        }
    }
    if (contador == 2) {
        resultado = true;
    } else {
        resultado = false;
    }
    return resultado;
}

console.log(primos(num));
