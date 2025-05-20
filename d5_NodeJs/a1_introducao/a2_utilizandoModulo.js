const fs = require('fs') // file system

// ### READ FILES ###
fs.readFile('./static/arquivo.txt', 'utf-8', (err, data) => {

    if (err) {
        console.log(err);
    }

    console.log(data);

});

// ### CREATE FILES ###
fs.appendFile('./static/arquivo.txt', "Hello World appendfile", (err, data) => {
    if (err) throw err;

    console.log("Saved!!");
});

fs.open('./static/arquivo.txt', 'w', function (err, file) {
    if (err) throw err;

    console.log("Saved!!!");
});

fs.writeFile('./static/arquivo.txt', 'hello content!!!', function (err) {
    if (err) throw err;

    console.log(err);
});

// ### UPDATE FILES ###

fs.appendFile('./static/arquivo.txt', "this is my text", function (err) {
    if (err) throw err;

    console.log("Update!!!");
})

fs.writeFile('./static/arquivo.txt', "this is my text", function (err) {
    if (err) throw err;

    console.log("Replace!!!");
})

// ### DELETE FILES ###

fs.unlink('./static/arquivo.txt', function (err) {
    if (err) throw err;

    console.log("File Deleted!!!");
})

// ### RENAME FILES ###

fs.rename('./static/arquivo.txt', "./static/arquivoRenomeado.txt", function (err) {
    if (err) throw err;

    console.log("File Renamed!!!");
})