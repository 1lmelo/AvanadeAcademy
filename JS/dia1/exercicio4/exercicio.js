var Pessoa = function (nome, materia){
  this.nome = nome; 
  this.materia = materia;
}


var Professor = new Pessoa ('Diego', 'Front-end');
Pessoa.prototype.ensinar = function(){
  console.log(this.nome + ' esta ensinando ' + this.materia);
}

console.log(Professor.ensinar())

