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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nError: Cannot find module 'babel-preset-env'\\nRequire stack:\\n- D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\files\\\\plugins.js\\n- D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\files\\\\index.js\\n- D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\index.js\\n- D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\babel-loader\\\\lib\\\\index.js\\n- D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\loader-runner\\\\lib\\\\loadLoader.js\\n- D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js\\n- D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js\\n- D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\webpack\\\\lib\\\\NormalModuleFactory.js\\n- D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\webpack\\\\lib\\\\Compiler.js\\n- D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\webpack\\\\lib\\\\webpack.js\\n- D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\webpack-cli\\\\bin\\\\utils\\\\validate-options.js\\n- D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\webpack-cli\\\\bin\\\\utils\\\\convert-argv.js\\n- D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\webpack-cli\\\\bin\\\\cli.js\\n- D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\webpack\\\\bin\\\\webpack.js\\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)\\n    at resolve (D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\v8-compile-cache\\\\v8-compile-cache.js:164:23)\\n    at resolveStandardizedName (D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\files\\\\plugins.js:100:7)\\n    at resolvePreset (D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\files\\\\plugins.js:48:10)\\n    at loadPreset (D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\files\\\\plugins.js:67:20)\\n    at createDescriptor (D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-descriptors.js:154:9)\\n    at D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-descriptors.js:109:50\\n    at Array.map (<anonymous>)\\n    at createDescriptors (D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-descriptors.js:109:29)\\n    at createPresetDescriptors (D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-descriptors.js:101:10)\\n    at presets (D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-descriptors.js:47:19)\\n    at mergeChainOpts (D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-chain.js:416:26)\\n    at D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-chain.js:374:7\\n    at Generator.next (<anonymous>)\\n    at loadFileChain (D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-chain.js:228:24)\\n    at loadFileChain.next (<anonymous>)\\n    at buildRootChain (D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\config-chain.js:135:29)\\n    at buildRootChain.next (<anonymous>)\\n    at loadPrivatePartialConfig (D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\partial.js:101:62)\\n    at loadPrivatePartialConfig.next (<anonymous>)\\n    at D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\partial.js:140:25\\n    at Generator.next (<anonymous>)\\n    at step (D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\gensync\\\\index.js:261:32)\\n    at D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\gensync\\\\index.js:273:13\\n    at async.call.result.err.err (D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\gensync\\\\index.js:223:11)\\n    at D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\gensync\\\\index.js:50:45\\n    at step (D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\gensync\\\\index.js:287:14)\\n    at D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\gensync\\\\index.js:273:13\\n    at async.call.result.err.err (D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\gensync\\\\index.js:223:11)\\n    at D:\\\\VS_code_project\\\\JavaScript\\\\node_modules\\\\gensync\\\\index.js:189:28\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });