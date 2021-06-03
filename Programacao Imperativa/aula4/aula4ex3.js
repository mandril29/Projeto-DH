// ano bissexto sim o nao
// ano/4 e resto e 0
// if ternario = 3 partes
sintaxe
//condicao ? parte caso true : parte caso false

let ano=2020
let resto=ano%4;
let resposta=resto==0? "É bissexto" : "Não é bissexto";

console.log(resposta);
