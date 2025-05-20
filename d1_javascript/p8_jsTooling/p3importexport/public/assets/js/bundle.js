/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pessoa": () => (/* binding */ Pessoa),
/* harmony export */   "default": () => (/* binding */ soma),
/* harmony export */   "documentos": () => (/* binding */ documentos)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// export const nome = 'Diogo';
// const sobrenome = 'Mello';
// const idade = 20;
function soma(x, y) {
  return x + y;
}
var documentos = {
  name: "Diogo",
  sobrenome: "Dias",
  dados: {
    idade: 21,
    peso: 91.5
  }
};

var Pessoa = /*#__PURE__*/_createClass(function Pessoa(nome, sobrenome) {
  _classCallCheck(this, Pessoa);

  this.nome = nome;
  this.sobrenome = sobrenome;
}); // // exportando um valor
// export {sobrenome as sobrenome2, idade}; // somente nome pode ser importado do modulo

/***/ }),

/***/ "./src/moduloPai.js":
/*!**************************!*\
  !*** ./src/moduloPai.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pessoa": () => (/* reexport safe */ _modulo1__WEBPACK_IMPORTED_MODULE_0__.Pessoa),
/* harmony export */   "documentos": () => (/* reexport safe */ _modulo1__WEBPACK_IMPORTED_MODULE_0__.documentos)
/* harmony export */ });
/* harmony import */ var _modulo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1 */ "./src/modulo1.js");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduloPai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduloPai */ "./src/moduloPai.js");
// ***importando apenas alguns valores
// import {nome, sobrenome, idade, soma} from './modulo1';
// console.log(nome, sobrenome, idade);
// // ***importando tudo
// import * as modulo from './modulo1';
// console.log(soma(4,87));
// // ***renomeando um modulo
// // ** a renomeação de modulos tambem pode ser feita dentro do modulo
// import {nome as nome2, sobrenome2, Pessoa} from './modulo1';
// const p1 = new Pessoa('Diogo', 'Mello');
// const nome = 'Geovana';
// console.log(nome2, sobrenome2,nome, p1);
// // ***importando um modulo padrão
// import modulo from './modulo1';
// console.log(modulo(1, 2));
// console.log(modulo);
// import { documentos as doc} from "./modulo1";
// import ('./modulo1').then((module) => {
//     return module;
// })

console.log(_moduloPai__WEBPACK_IMPORTED_MODULE_0__.documentos.name);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map