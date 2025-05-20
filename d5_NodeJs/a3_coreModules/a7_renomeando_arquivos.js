const fs = require('fs');

fs.rename("arquivo.txt", "arquivoNovo.txt", function(err) {

    if(err){
        console.log(err);
    }

    console.log('Arquivo Renomeado');

});