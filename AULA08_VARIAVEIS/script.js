//criando uma varialvel var

var nome = 'Adamastor';
console.log(nome);

if(nome === 'Adamastor'){
    var escola = 'cesf';
    console.log(escola); 
}

console.log(escola);
escola = 'Sagrada';
console.log(escola);

//variaveis do tipo var, elas são acessiveis fora do escopo em que foram criadas, isso implica na possibilidade de reatribuirmos novo valor a ela.

//criando váriavel do tipo let

if(nome === 'Adamastor'){
    let curso = 'DS';
    console.log(curso);

}

//console.log(curso)
curso = 'culinaria'
console.log(curso)

//cuidado não conseguimos acessar a let curso, porque ela só existe no escopo em que foi criada, 
//além de não podermos consumir não conseguimos sobreescrever reatribuindo-lhe  valor, 
//ao tentarmos fazer isso estamos criando um esqueleto dentro do armário e induzindo nosso código a bugs

//variavel do tipo const

const cargo = 'estudante';
console.log(cargo);

//tentar reatribuir valor a cargo
cargo = 'estagiário';
console.log(cargo);


