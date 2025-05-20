"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var nome = "Diogo";
var obj = {
  nome: nome
};

var novoObj = _objectSpread({}, obj);

var estados = ['Pará', 'Mato-Grosso', 'Ceará', 'Maranhão', 'Piauí'];
console.log(novoObj); // terminal
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
