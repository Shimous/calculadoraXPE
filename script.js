let soma = document.getElementById('soma')
let subtracaoAB = document.getElementById('subtracaoAB')
let subtracaoBA = document.getElementById('subtracaoBA')

function calcularSoma(a, b){
    return a + b
}

function calcularSubtracaoAB(a, b){
    return a - b
}

function calcularSubtracaoBA(a, b){
    return b - a
}


function calcularMutiplicacao(a, b){
    return a * b
}

function calcularDivisaoAB(a, b){
    return a / b
}

function calcularDivisaoBA(a, b){
    return b / a
}

function calcularPotenciaBA(a, b){
    return Math.pow(b, a)
}

function calcularPotenciaAB(a, b){
    return Math.pow(a, b)
}

function calcularRaiz(x){
    return Math.sqrt(x).toFixed(3)
}

function calcularFatorial(x){
    var resultado = 1
    var i = x
    while(i > 0){
        resultado = i * resultado
        i--
    }
    return resultado
}

function calcularMedia(a, b){
    return (a + b)/2
}
const calcular = () => {
    console.log('foi')
    let inputA = parseFloat(document.getElementById('A').value)
    let inputB = parseFloat(document.getElementById('B').value)
    
    soma.innerHTML = calcularSoma(inputA, inputB)
    subtracaoAB.innerHTML = calcularSubtracaoAB(inputA, inputB)
    subtracaoBA.innerHTML = calcularSubtracaoBA(inputA, inputB)
    
    multiplicacao.innerHTML = calcularMutiplicacao(inputA, inputB)
    divisaoAB.innerHTML = calcularDivisaoAB(inputA, inputB).toFixed(2)
    divisaoBA.innerHTML = calcularDivisaoBA(inputA, inputB).toFixed(2)

    potenciaBA.innerHTML = calcularPotenciaBA(inputA, inputB)
    potenciaAB.innerHTML = calcularPotenciaAB(inputA, inputB)
    raizA.innerHTML = calcularRaiz(inputA)

    raizB.innerHTML = calcularRaiz(inputB)
    Afatorial.innerHTML = calcularFatorial(inputA)
    Bfatorial.innerHTML = calcularFatorial(inputB)

    porcentoAB.innerHTML = (calcularDivisaoAB(inputA, inputB)*100).toFixed(0) +'%'
    porcentoBA.innerHTML = (calcularDivisaoBA(inputA, inputB)*100).toFixed(0) +'%'
    media.innerHTML = calcularMedia(inputA, inputB).toFixed(1)
}