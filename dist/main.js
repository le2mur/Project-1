/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./DataBase/DataBase1.json":
/*!*********************************!*\
  !*** ./DataBase/DataBase1.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"ValP1\\\":312,\\\"ValUnDamConcrete\\\":435,\\\"ValCoef\\\":8.6},{\\\"ValP1\\\":313,\\\"ValUnDamConcrete\\\":432,\\\"ValCoef\\\":8.5416},{\\\"ValP1\\\":314,\\\"ValUnDamConcrete\\\":429,\\\"ValCoef\\\":8.4833},{\\\"ValP1\\\":315,\\\"ValUnDamConcrete\\\":426,\\\"ValCoef\\\":8.425},{\\\"ValP1\\\":316,\\\"ValUnDamConcrete\\\":423,\\\"ValCoef\\\":8.3666},{\\\"ValP1\\\":317,\\\"ValUnDamConcrete\\\":417.8572,\\\"ValCoef\\\":8.2666},{\\\"ValP1\\\":318,\\\"ValUnDamConcrete\\\":412.7144,\\\"ValCoef\\\":8.1666},{\\\"ValP1\\\":319,\\\"ValUnDamConcrete\\\":407.5716,\\\"ValCoef\\\":8.0666},{\\\"ValP1\\\":320,\\\"ValUnDamConcrete\\\":402.4288,\\\"ValCoef\\\":7.9666},{\\\"ValP1\\\":321,\\\"ValUnDamConcrete\\\":397.286,\\\"ValCoef\\\":7.8666},{\\\"ValP1\\\":322,\\\"ValUnDamConcrete\\\":392.1432,\\\"ValCoef\\\":7.7666},{\\\"ValP1\\\":323,\\\"ValUnDamConcrete\\\":387,\\\"ValCoef\\\":7.6666},{\\\"ValP1\\\":324,\\\"ValUnDamConcrete\\\":381.3333,\\\"ValCoef\\\":7.5444},{\\\"ValP1\\\":325,\\\"ValUnDamConcrete\\\":375.6666,\\\"ValCoef\\\":7.4222},{\\\"ValP1\\\":326,\\\"ValUnDamConcrete\\\":370,\\\"ValCoef\\\":7.3},{\\\"ValP1\\\":327,\\\"ValUnDamConcrete\\\":365.75,\\\"ValCoef\\\":7.2166},{\\\"ValP1\\\":328,\\\"ValUnDamConcrete\\\":361.5,\\\"ValCoef\\\":7.1333},{\\\"ValP1\\\":329,\\\"ValUnDamConcrete\\\":357.25,\\\"ValCoef\\\":7.05},{\\\"ValP1\\\":330,\\\"ValUnDamConcrete\\\":353,\\\"ValCoef\\\":6.9666},{\\\"ValP1\\\":331,\\\"ValUnDamConcrete\\\":348.75,\\\"ValCoef\\\":6.8833},{\\\"ValP1\\\":332,\\\"ValUnDamConcrete\\\":344.5,\\\"ValCoef\\\":6.8},{\\\"ValP1\\\":333,\\\"ValUnDamConcrete\\\":340.25,\\\"ValCoef\\\":6.7166},{\\\"ValP1\\\":334,\\\"ValUnDamConcrete\\\":336,\\\"ValCoef\\\":6.6333},{\\\"ValP1\\\":335,\\\"ValUnDamConcrete\\\":330.3333,\\\"ValCoef\\\":6.5222},{\\\"ValP1\\\":336,\\\"ValUnDamConcrete\\\":324.6666,\\\"ValCoef\\\":6.4111},{\\\"ValP1\\\":337,\\\"ValUnDamConcrete\\\":319,\\\"ValCoef\\\":6.3},{\\\"ValP1\\\":338,\\\"ValUnDamConcrete\\\":315,\\\"ValCoef\\\":6.225},{\\\"ValP1\\\":339,\\\"ValUnDamConcrete\\\":311,\\\"ValCoef\\\":6.15},{\\\"ValP1\\\":340,\\\"ValUnDamConcrete\\\":307,\\\"ValCoef\\\":6.075},{\\\"ValP1\\\":341,\\\"ValUnDamConcrete\\\":303,\\\"ValCoef\\\":6},{\\\"ValP1\\\":342,\\\"ValUnDamConcrete\\\":297.6666,\\\"ValCoef\\\":5.8888},{\\\"ValP1\\\":343,\\\"ValUnDamConcrete\\\":292.3333,\\\"ValCoef\\\":5.7777},{\\\"ValP1\\\":344,\\\"ValUnDamConcrete\\\":287,\\\"ValCoef\\\":5.6666},{\\\"ValP1\\\":345,\\\"ValUnDamConcrete\\\":283.25,\\\"ValCoef\\\":5.6},{\\\"ValP1\\\":346,\\\"ValUnDamConcrete\\\":279.5,\\\"ValCoef\\\":5.5333},{\\\"ValP1\\\":347,\\\"ValUnDamConcrete\\\":275.75,\\\"ValCoef\\\":5.4666},{\\\"ValP1\\\":348,\\\"ValUnDamConcrete\\\":272,\\\"ValCoef\\\":5.4},{\\\"ValP1\\\":349,\\\"ValUnDamConcrete\\\":268,\\\"ValCoef\\\":5.3166},{\\\"ValP1\\\":350,\\\"ValUnDamConcrete\\\":264,\\\"ValCoef\\\":5.2333},{\\\"ValP1\\\":351,\\\"ValUnDamConcrete\\\":260,\\\"ValCoef\\\":5.15},{\\\"ValP1\\\":352,\\\"ValUnDamConcrete\\\":256,\\\"ValCoef\\\":5.0666},{\\\"ValP1\\\":353,\\\"ValUnDamConcrete\\\":250.6666,\\\"ValCoef\\\":4.9555},{\\\"ValP1\\\":354,\\\"ValUnDamConcrete\\\":245.3333,\\\"ValCoef\\\":4.8444},{\\\"ValP1\\\":355,\\\"ValUnDamConcrete\\\":240,\\\"ValCoef\\\":4.7333},{\\\"ValP1\\\":356,\\\"ValUnDamConcrete\\\":236,\\\"ValCoef\\\":4.6666},{\\\"ValP1\\\":357,\\\"ValUnDamConcrete\\\":232,\\\"ValCoef\\\":4.6},{\\\"ValP1\\\":358,\\\"ValUnDamConcrete\\\":228,\\\"ValCoef\\\":4.5333},{\\\"ValP1\\\":359,\\\"ValUnDamConcrete\\\":224,\\\"ValCoef\\\":4.4666}]\");\n\n//# sourceURL=webpack:///./DataBase/DataBase1.json?");

/***/ }),

/***/ "./DataBase/DataBase2.json":
/*!*********************************!*\
  !*** ./DataBase/DataBase2.json ***!
  \*********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"min\\\":100,\\\"max\\\":150,\\\"SJ4U\\\":0.86,\\\"SJ4Ucoef\\\":0.0106,\\\"SJ4P\\\":0.28,\\\"SJ4Pcoef\\\":0.0074,\\\"SJ6U\\\":0.52,\\\"SJ6Ucoef\\\":0.0102,\\\"SJ6P\\\":0,\\\"SJ6Pcoef\\\":0,\\\"SK6U\\\":0.855,\\\"SK6Ucoef\\\":0.0099,\\\"SK8U\\\":0.51,\\\"SK8Ucoef\\\":0.0094},{\\\"min\\\":150,\\\"max\\\":200,\\\"SJ4U\\\":1.39,\\\"SJ4Ucoef\\\":0.0072,\\\"SJ4P\\\":0.65,\\\"SJ4Pcoef\\\":0.0054,\\\"SJ6U\\\":1.03,\\\"SJ6Ucoef\\\":0.009,\\\"SJ6P\\\":0.34,\\\"SJ6Pcoef\\\":0.0058,\\\"SK6U\\\":1.35,\\\"SK6Ucoef\\\":0.0074,\\\"SK8U\\\":0.98,\\\"SK8Ucoef\\\":0.0076},{\\\"min\\\":200,\\\"max\\\":250,\\\"SJ4U\\\":1.75,\\\"SJ4Ucoef\\\":0.005,\\\"SJ4P\\\":0.92,\\\"SJ4Pcoef\\\":0.004,\\\"SJ6U\\\":1.48,\\\"SJ6Ucoef\\\":0.0052,\\\"SJ6P\\\":0.63,\\\"SJ6Pcoef\\\":0.0044,\\\"SK6U\\\":1.72,\\\"SK6Ucoef\\\":0.0056,\\\"SK8U\\\":1.36,\\\"SK8Ucoef\\\":0.0064},{\\\"min\\\":250,\\\"max\\\":300,\\\"SJ4U\\\":2,\\\"SJ4Ucoef\\\":0.0036,\\\"SJ4P\\\":1.12,\\\"SJ4Pcoef\\\":0.003,\\\"SJ6U\\\":1.74,\\\"SJ6Ucoef\\\":0.0038,\\\"SJ6P\\\":0.85,\\\"SJ6Pcoef\\\":0.0034,\\\"SK6U\\\":2,\\\"SK6Ucoef\\\":0.0044,\\\"SK8U\\\":1.68,\\\"SK8Ucoef\\\":0.0052},{\\\"min\\\":300,\\\"max\\\":350,\\\"SJ4U\\\":2.18,\\\"SJ4Ucoef\\\":0.0026,\\\"SJ4P\\\":1.27,\\\"SJ4Pcoef\\\":0.0024,\\\"SJ6U\\\":1.93,\\\"SJ6Ucoef\\\":0.0028,\\\"SJ6P\\\":1.02,\\\"SJ6Pcoef\\\":0.0026,\\\"SK6U\\\":2.22,\\\"SK6Ucoef\\\":0.0036,\\\"SK8U\\\":1.94,\\\"SK8Ucoef\\\":0.0044},{\\\"min\\\":350,\\\"max\\\":400,\\\"SJ4U\\\":2.31,\\\"SJ4Ucoef\\\":0.0022,\\\"SJ4P\\\":1.39,\\\"SJ4Pcoef\\\":0.002,\\\"SJ6U\\\":2.07,\\\"SJ6Ucoef\\\":0.0022,\\\"SJ6P\\\":1.15,\\\"SJ6Pcoef\\\":0.002,\\\"SK6U\\\":2.4,\\\"SK6Ucoef\\\":0.003,\\\"SK8U\\\":2.16,\\\"SK8Ucoef\\\":0.0036}]\");\n\n//# sourceURL=webpack:///./DataBase/DataBase2.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DataBase_DataBase1_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DataBase/DataBase1.json */ \"./DataBase/DataBase1.json\");\nvar _DataBase_DataBase1_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../DataBase/DataBase1.json */ \"./DataBase/DataBase1.json\", 1);\n/* harmony import */ var _DataBase_DataBase2_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataBase/DataBase2.json */ \"./DataBase/DataBase2.json\");\nvar _DataBase_DataBase2_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../DataBase/DataBase2.json */ \"./DataBase/DataBase2.json\", 1);\n﻿\r\n﻿ \r\n\r\n// Находим индекс нужного обьекта в DB1\r\nlet findindexDB1 = p1 => _DataBase_DataBase1_json__WEBPACK_IMPORTED_MODULE_0__.findIndex(item => (p1 === item.ValP1));\r\n\r\n// Расчет прочности поврежденного бетона \r\nlet strUnDamConcrete = (obj, p2) => (obj.ValUnDamConcrete - (((p2 - 1.1) / 0.01) * obj.ValCoef)).toFixed(0);\r\n\r\n// Находим индекс нужного обьекта в DB2\r\nlet findindexDB2 = val => _DataBase_DataBase2_json__WEBPACK_IMPORTED_MODULE_1__.findIndex(item => (val >= item.min && val < item.max));\r\n\r\n// Нахождение прочности бетона опор по маркам. \r\nfunction strDamConcrete(obj, val) {\r\n  let result = '';\r\n  let dif = val - obj.min;\r\n   if(val > 400) {\r\n    result = 'Прочность соответствует проектной нагрузке.';\r\n   } else if(val < 100) {\r\n      result = 'Бетон полностью исчерпал несущую способность.';\r\n     } else {\r\n        result = `Остаточная несущая способность для разных типов опор<br> СЖБК-4,5(УОФ):  ${(dif * obj.SJ4Ucoef + obj.SJ4U).toFixed(2)}Мн<br>\r\n                  СЖБК-4,5(ПК):  ${(dif * obj.SJ4Pcoef + obj.SJ4P).toFixed(2)}Мн<br> \r\n                  СЖБК-6(УОФ):  ${(dif * obj.SJ6Ucoef + obj.SJ6U).toFixed(2)}Мн<br>\r\n                  СЖБК-6(ПК):  ${(dif * obj.SJ6Pcoef + obj.SJ6P).toFixed(2)}Мн<br> \r\n                  СК(У)-6(УОФ):  ${(dif * obj.SK6Ucoef + obj.SK6U).toFixed(2)}Мн<br>\r\n                  СК(У)-8(УОФ):  ${(dif * obj.SK8Ucoef + obj.SK8U).toFixed(2)}Мн`;                   \r\n       }\r\n  return result;\r\n}\r\n\r\nfunction calcCon(p1, p2) {\r\n let objDB1 = _DataBase_DataBase1_json__WEBPACK_IMPORTED_MODULE_0__[findindexDB1(p1)];\r\n let UnDamConcrete = strUnDamConcrete(objDB1, p2); \r\n let objDB2 = _DataBase_DataBase2_json__WEBPACK_IMPORTED_MODULE_1__[findindexDB2(UnDamConcrete)];\r\n return strDamConcrete(objDB2, UnDamConcrete);\r\n}\r\n \r\n document.getElementById(\"button\").onclick = function() {\r\n  let result;\r\n  let P1 = Number(document.getElementById(\"p1\").value);\r\n  let P2 = (document.getElementById(\"p2\").value);\r\n   if(P2.includes(',')){\r\n    P2 = Number(P2.replace(/,/, '.'));\r\n   }\r\n\r\n  // Прочность для опор без предварительного напряжения арматуры.\r\n  if(Number(document.getElementById(\"select\").value) === 2) {\r\n   result = 1.6 - P2 + 1;\r\n   document.getElementById(\"result\").innerHTML = `Остаточная несущая способность:  ${result.toFixed(2)}Мн`;\r\n  } // Прочность для опор с предварительным напряжением арматуры(При показателе П1 более 36мкс).\r\n    else if(Number(document.getElementById(\"select\").value) === 1 && P1 >= 360) {\r\n     result = (1.4 - P2) * 2 + 1;\r\n     document.getElementById(\"result\").innerHTML = `Остаточная несущая способность:  ${result.toFixed(2)}Мн`;\r\n    } // Прочность для опор с предварительным напряжением арматуры(При показателе П1 менее 36мкс и П2 более 1,1).\r\n      else if(Number(document.getElementById(\"select\").value) === 1 && P1 < 360) {\r\n       result = calcCon(P1, P2);\r\n       document.getElementById(\"result\").innerHTML = result;\r\n      }\r\n };\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });