//como declarar
var a;

let b;

const c = null; //precisa ser inicializada

//escopo global
var escopoGlobal = "global";
console.log(escopoGlobal);

//escopo local
function soma(x, b) {
  let soma;
  return (soma = x + b);
}

//atribuição
var atrib = "ana";

//comparação
if (a == b){
    console.log("São iguais");
}else{
    console.log("Não são iguais")
}

//comparação identica (não só valores, mas tipos também)
if ( c === a){
    console.log("Os tipos também são iguais")
}else{
    console.log("Os tipos não são iguais")
}
