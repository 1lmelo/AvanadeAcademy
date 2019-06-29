function sumAll(numero){
  var total = 0;
  var maior = numero[0] > numero [1] ? numero[0] : numero[1];
  var menor = numero[0] < numero [1] ? numero[0] : numero[1];
  for(var i = menor; i <= maior; i++ ){
      total += i;
  }
  return total;
}

console.log(sumAll([4,1]));