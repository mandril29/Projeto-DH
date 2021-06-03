//funcao declarativa
//math biblioteca de comandos matematicos
//sqrt=square
//objetivo da minha funcao:elevar o num ao cubo e extrair raiz quadrada
function calcular(numero){
    let resultado=Math.pow(numero, 3);
    resultado=Math.sqrt(resultado);
    return resultado;
}

//invocar a funcao

console.log(calcular(2));
