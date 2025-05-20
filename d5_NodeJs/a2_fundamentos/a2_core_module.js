const path = require('path');

const extension = path.extname("arquivo.php");
const directories = path.dirname('../a1_introducao/static');

const obj = {
    dir: '../a1_introducao/static',
    base: 'img.js'
}

const p = path.format(obj);

console.log(extension);
console.log(directories);
console.log(p);

const customPath = '/relatorios/diogo/relatorio1.pdf';

console.log("basename: ", path.basename(customPath));
console.log("resolve: ", path.resolve('pratica_args.js'))

const midFolder = "relatorios";
const filename = "diogo.txt";

const finalPath = path.join('/', 'arquivos', midFolder, filename);

console.log("join: ", finalPath);