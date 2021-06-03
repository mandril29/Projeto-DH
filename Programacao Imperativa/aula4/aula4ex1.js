//regra geral
//funcao declarativa
function nomeFuncao(parametros){
    //corpo da funcao - linhas de comando
}


//criar funcoes que facam calculos aritmeticos basicos
// expresao de funcao trabalha com funcoes anonimas nao tem nome

let somar=function (n1,n2){
    return n1+n2;

    //let soma= n1+n2;
    //return soma;
}

//function somar1(n1,n2){
//    return n1+n2;
//}

let subtrair=function (n1,n2){
    return n1-n2;
}

let multiplicar=function (n1,n2){
    return n1*n2;
}

let dividir=function (n1,n2){
    if (n2==0){
        return "Imposible dividir por 0!";
    }
    else {
        return n1/n2;
    }
}

function resultado (somar,subtrair){
    return somar-subtrair
}


console.log(dividir(10,0))
