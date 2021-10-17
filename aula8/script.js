let str = `Qualquer conteudo!`;

let str2 = `Uma outra string ${str}`;

// let str = "Qualquer conteudo";
// let str2 = 'Uma outra string ' + str;

//console.log(str2);


//Arrays uma colecao de dados.

//O array e constituido por elementos
// const frutas = ['Uva', 'Banana', 'Laranja', 'Melancia']; //4

// let euGosto = `Eu gosto de ${frutas[2]}`;

// //console.log(euGosto); //uva

// console.log(frutas[0]); //Uva
// console.log(frutas[1]); //Banana
// console.log(frutas[2]); //Laranja
// console.log(frutas[3]); //Melancia

const Pessoa = [
    "Kevin", //0
    16,      //1
    "Solteiro", //2
    "Handball", //3
    1.70, //4
    cores = ["azul", "preto", "vermelho", "salmao", "ocre"] //5
];

let key = 5;

key++; //4

console.log('kevin'[0], 'kevin'[1]  );
console.log(Pessoa[5][key]); // array bidimensional

// (function(p){
//     const kevin = `Meu nome e ${Pessoa[0]} eu tenho ${Pessoa[1]} anos e sou ${Pessoa[2]} 
//     eu tambem gosto de jogar ${Pessoa[3]}. Minha altura e de ${Pessoa[4]} `;
//     document.write(kevin);
// })(Pessoa)

