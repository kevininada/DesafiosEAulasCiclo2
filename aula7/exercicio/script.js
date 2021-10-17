//exercicio 8
function verificarMaiorNum(num1, num2){

    //if
    //operadores
    if(num1 > num2){
        console.log("O número "+num1+" é maior que o numero "+ num2);
    } else {
        console.log("O número "+num1+" é menor que o numero "+ num2);
    }

}

//verificarMaiorNum(1000, 1000)

function teste(){
    alert('Estou na functioin teste');
    return nome;
}

//teste();

//teste()
//console.log( teste() );
//let msg = (nome)=> { return nome }; //arrow function
//console.log( msg('Kevin') ) ;

// (function(produto, preco){
//     alert('O produto e '+ produto + 'e o preco e de R$ '+preco);
// })('Biscoito', 2.35) // 2.35

let v1 = prompt('Digite o valor 1');
let v2 = prompt('Digite o valor 2');

const soma = (valor1, valor2)=>{
    let resultado = Number(valor1) / Number(valor2);
    console.log(resultado);
}

soma(v1, v2);



