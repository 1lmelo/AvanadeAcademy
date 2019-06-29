var alunos = [
    {nome:'Felipe M.', sexo:'M', idade:13 },
    {nome:'Luiza A.', sexo:'F', idade:14},
    {nome:'Marcos T.', sexo:'M', idade:14},
    {nome:'Bianca B.', sexo:'F', idade:13},
    {nome:'Rogério R.', sexo:'M', idade:15},
];



//LISTAR TODOS OS NOMES

alunos.forEach(function(item){
        console.log(item.nome);
})

//DOBREM A IDADE

var dobrar = alunos.map(function(item){


    return  item.idade * 2;
});
console.log('--------------------')

console.log(dobrar)



//FILTRAR SOMENTE O SEXO FEMININO


var feminino = alunos.filter(function(item){


    return  item.sexo == 'F';
});
console.log('--------------------')

console.log(feminino)


//FILTRAR SE TODOS OS CRITERIOS ATENDEM (IDADE > 14)

var idade = alunos.every(function(item){


    return  item.idade >= 14;
});

console.log('--------------------')
console.log(idade)
console.log('--------------------')

//VERIFICA SE ALGUMA ATENDE O CRITERIO MAIOR DE 18 (IDADE >18)

var maior = alunos.some(function(item){


    return  item.idade > 18;
});

console.log(maior)
console.log('--------------------')