function calculadora(){
    const operacao = Number(prompt("Escolha uma operação: \n 1-soma \n 2-subtração \n 3-multiplicação \n 4-divisão "))
}

calculadora()

let n1 = Number(prompt("Insira o primeiro valor: "))
let n2 = Number(prompt("Insira um segundo valor: "))
let resultado;

function soma(){
    resultado = n1 + n2
    alert(`${n1} + ${n2} = ${resultado}`)
}

function subtracao(){
    resultado = n1 - n2
    alert(`${n1} - ${n2} = ${resultado}`)
}

function multiplicacao(){
    resultado = n1 * n2
    alert(`${n1} * ${n2} = ${resultado}`)
}

function divisao(){
    resultado = n1/n2
    alert(`${n1} / ${n2} = ${resultado}`)
}


if(operacao == 1){
    soma()
}else if( operacao == 2){
    subtracao()
}else if (operacao == 3){
    multiplicacao()
}else if(operacao == 4){
    divisao()
}else{
    console.log("opção não disponível! \n Tente outro número!")
}

