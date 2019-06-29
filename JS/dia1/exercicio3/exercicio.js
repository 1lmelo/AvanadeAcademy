function dropElements (array, anonima){
        var arrayFiltrado = [];
        for(var i = 0; i < array.length; i++){
            var devoIncluir = anonima(array[i]);
            if(devoIncluir) arrayFiltrado.push()
        }
        console.log(arrayFiltrado)
    }
    console.log(dropElements([1,2,3,1,2,3], function(n) {return n >=2;}));
