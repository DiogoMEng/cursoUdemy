const nome = "Diogo";
const obj = {nome};
const novoObj = {...obj};

const estados = ['Pará', 'Mato-Grosso', 'Ceará', 'Maranhão', 'Piauí']

console.log(novoObj);

// terminal
// 1 - iniciar o gerenciador de pacotes node
// npm init -y

// 2 - instalando o babel
// npm install @babel/cli @babel/preset/env @babel/core

// 3 - mudando para dependences
// npm install --save-dev @babel/cli @babel/preset-env @babel/core

// 4 - passa o arquivo de uma versão recente para uma mais antiga: npx babel main.js -o bundle.js --presets=@babel/env
// ** -o = arquivo de saida

// acrescentar no arquivo "package.json", na parte scripts "babel": "babel ./main.js -o ./bundle.js --presets=@babel/env -w"
// ** dessa forma o arquivo sempre será convertido para uma formatação mais antiga
// ** depois digitar no terminal npm run babel, para aplicar a formatação
// ** para finalizar - ctrl + C