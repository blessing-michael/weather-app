/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Key2.js":
/*!*********************!*\
  !*** ./src/Key2.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"genn\": () => (/* binding */ genn)\n/* harmony export */ });\nfunction genn() {\r\n  let mixgen = [\"2aacqF\", \"EgQelT\", \"Da9Soy\", \"yq9QD\", \"EWUJ9\", \"wjZ\"];\r\n  let secone = \"2a\";\r\n  let sectwo = \"LgC\";\r\n\r\n  let secretGif = sectwo.split(\"\").reverse().join(\"\");\r\n\r\n  let stepOne = mixgen.join(\"\").split(\"\").join(\"\");\r\n\r\n  let stepTwo = stepOne.split(secone);\r\n\r\n  let stepThree = stepTwo[0] + stepTwo[1];\r\n\r\n  let key = stepThree + secretGif;\r\n\r\n  return key;\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/Key2.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domData\": () => (/* binding */ domData),\n/* harmony export */   \"gifAPI\": () => (/* binding */ gifAPI),\n/* harmony export */   \"takeLocationAPI\": () => (/* binding */ takeLocationAPI)\n/* harmony export */ });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/key.js\");\n/* harmony import */ var _Key2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Key2 */ \"./src/Key2.js\");\n\r\n\r\n\r\nconst domData = (() => {\r\n  const btnsearch = document.getElementById(\"btn\");\r\n  const clearsearch = document.getElementById(\"clear-Btn\");\r\n  const resultdiv = document.querySelector(\".resultdiv\");\r\n  const imgdiv = document.querySelector(\".img-div\");\r\n\r\n  btnsearch.addEventListener(\"click\", () => {\r\n    takeLocationAPI();\r\n    gifAPI();\r\n    resultdiv.style.visibility = \"visible\";\r\n    imgdiv.style.visibility = \"visible\";\r\n  });\r\n  clearsearch.addEventListener(\"click\", () => {\r\n    const citydata = document.getElementById(\"city\");\r\n    const statedata = document.getElementById(\"state\");\r\n    const countrydata = document.getElementById(\"country\");\r\n    resultdiv.style.visibility = \"hidden\";\r\n    imgdiv.style.visibility = \"hidden\";\r\n    citydata.value = \"\";\r\n    statedata.value = \"\";\r\n    countrydata.value = \"\";\r\n  });\r\n})();\r\n\r\n//fetch function to fatch data from api\r\nasync function takeLocationAPI() {\r\n  console.log(\"clicked\");\r\n\r\n  console.log(\"hey.... i am taking in location\", location);\r\n\r\n  try {\r\n    const citydata = document.getElementById(\"city\").value;\r\n    const statedata = document.getElementById(\"state\").value;\r\n    const countrydata = document.getElementById(\"country\").value;\r\n    console.log(citydata, statedata, countrydata + \".....value coming \");\r\n\r\n    const infodata1 = document.getElementById(\"info1\");\r\n    const infodata2 = document.getElementById(\"info2\");\r\n    const infodata3 = document.getElementById(\"info3\");\r\n    const infodata4 = document.getElementById(\"info4\");\r\n    const infodata5 = document.getElementById(\"info5\");\r\n    const infohead = document.getElementById(\"info-header\");\r\n\r\n    const response = await fetch(\r\n      \"https://api.openweathermap.org/data/2.5/weather?q=\" +\r\n        citydata +\r\n        \",\" +\r\n        statedata +\r\n        \",\" +\r\n        countrydata +\r\n        `&appid=${(0,_key__WEBPACK_IMPORTED_MODULE_0__.keygen)()}`\r\n    );\r\n    console.log(\"checking api key\", (0,_key__WEBPACK_IMPORTED_MODULE_0__.keygen)());\r\n    console.log(response);\r\n    const locationdata = await response.json();\r\n    console.log(locationdata);\r\n    infohead.textContent = citydata + \",\" + \" \" + statedata + \" \" + countrydata;\r\n    infodata1.textContent = `temp: ${Math.round(locationdata.main.temp)}°C`;\r\n    infodata2.textContent = `feels_like: ${Math.round(\r\n      locationdata.main.feels_like\r\n    )}°C`;\r\n    infodata3.textContent = `humidity: ${locationdata.main.humidity}%`;\r\n    infodata4.textContent = `wind: ${Math.round(locationdata.wind.speed)} MPH`;\r\n    infodata5.textContent = `weather: ${locationdata.weather[0].description}`;\r\n  } catch (error) {\r\n    const message1 = document.querySelector(\"#message1\");\r\n\r\n    message1.style.visibility = \"visible\";\r\n    message1.textContent = \"can't find weather in your location. Try again!\";\r\n    console.log(\"something went wrong while fetching dat....\", error.message);\r\n  }\r\n}\r\n// takeLocationAPI();\r\n\r\n//gif API DISPLAY\r\nasync function gifAPI() {\r\n  try {\r\n    const gifresponse = document.querySelector(\".gifresponse\");\r\n    const response = await fetch(\r\n      `https://api.giphy.com/v1/gifs/translate?api_key=${(0,_Key2__WEBPACK_IMPORTED_MODULE_1__.genn)()}&s=clouds`,\r\n      { mode: \"cors\" }\r\n    );\r\n    const cloudData = await response.json();\r\n    gifresponse.src = cloudData.data.images.original.url;\r\n    console.log(cloudData);\r\n  } catch (error) {\r\n    const domData = () => {\r\n      const btnsearch = document.getElementById(\"btn\");\r\n      const clearsearch = document.getElementById(\"clear-Btn\");\r\n      const resultdiv = document.querySelector(\".resultdiv\");\r\n      const imgdiv = document.querySelector(\".img-div\");\r\n      btnsearch.addEventListener(\"click\", () => {\r\n        takeLocationAPI();\r\n        gifAPI();\r\n        resultdiv.style.visibility = \"visible\";\r\n        imgdiv.style.visibility = \"visible\";\r\n      });\r\n      clearsearch.addEventListener(\"click\", () => {\r\n        const citydata = document.getElementById(\"city\");\r\n        const statedata = document.getElementById(\"state\");\r\n        const countrydata = document.getElementById(\"country\");\r\n        resultdiv.style.visibility = \"hidden\";\r\n        imgdiv.style.visibility = \"hidden\";\r\n        citydata.value = \"\";\r\n        statedata.value = \"\";\r\n        countrydata.value = \"\";\r\n      });\r\n    };\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\r\n\r\n\r\nfunction component() {\r\n  (0,_app__WEBPACK_IMPORTED_MODULE_0__.takeLocationAPI)();\r\n  (0,_app__WEBPACK_IMPORTED_MODULE_0__.gifAPI)();\r\n}\r\ncomponent();\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/key.js":
/*!********************!*\
  !*** ./src/key.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keygen\": () => (/* binding */ keygen)\n/* harmony export */ });\nfunction keygen() {\r\n  let mix = [\"2a2b27d9d\", \"0bea63\", \"6f3c17\", \"e0dd8a\", \"0fc\"];\r\n  let secone = \"2a\";\r\n  let sectwo = \"c620\";\r\n\r\n  let secret = sectwo.split(\"\").reverse().join(\"\");\r\n  let stepone = mix.join(\"\").split(\"\").join(\"\");\r\n  let steptwo = stepone.split(secone);\r\n  let stepthree = steptwo[0] + steptwo[1];\r\n  let key = stepthree + secret;\r\n  return key;\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/key.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;