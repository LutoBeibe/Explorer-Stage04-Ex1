let nota1 = parseInt(prompt("Digite o primeiro número:"))
let nota2 = parseInt(prompt("Digite o segundo número:"))

alert(`A soma dos dois número é: ${nota1+nota2}`)
alert(`A subtração dos dois número é: ${nota1-nota2}`)
alert(`A multiplicação dos dois número é: ${nota1*nota2}`)
alert(`A divisão dos dois número é: ${nota1/nota2}`)
alert(`O resto da divisão dos dois número é: ${nota1%nota2}`)

let soma = (nota1+nota2);

if(soma%2 == 0){
	alert("A soma dos dois números é par");
}else{
	alert("A soma dos dois números é impar");
}


if (nota1 === nota2) {
    alert(`Os números inseridos são iguais`)
} else {
    alert(`Os números inseridos são diferentes`)
}