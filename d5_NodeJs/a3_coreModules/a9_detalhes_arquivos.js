const fs = require("fs");

fs.appendFile("arquivo.txt", "Hello World!!!", function(err, data){

    if(err){
        console.log(err);
    }

    console.log(data);

});

fs.stat("arquivo.txt", (err, stats) => {

    if(err) {
        console.log(err);
        return;
    }

    console.log(stats.isFile()); // verifica se é arquivo
    console.log(stats.isDirectory()); // verifica se é diretório
    console.log(stats.isSymbolicLink());
    console.log(stats.ctime); // data de crialção
    console.log(stats.size); // tamanho do arquivo

});