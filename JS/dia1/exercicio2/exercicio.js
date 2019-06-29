function destroyer (array){
  var args = Array.from(arguments);
    if (args.length > 1){
        var arrayFiltrado = [];
        for(var i = 0; i < array.length; i++){
            var valor = array[i];
            if(args.indexOf(valor) === -1) arrayFiltrado.push(valor)
        }
        return arrayFiltrado;
    }
        return array; 
}

    console.log(destroyer([1,2,3,1,2,3], 2, 3))
    console.log(destroyer([1,2,3,5, 1,2,3], 2, 3))
    console.log(destroyer([3,5,1,2,2], 2, 3, 5))
