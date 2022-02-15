/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// tabs\n\nconst tabsBtn = document.querySelectorAll('.calculator__tab');\nconst slides = document.querySelectorAll('.calculator__slide');\n\nconsole.log(slides);\n\ntabsBtn.forEach((item, index) => {\n    item.addEventListener('click', () => {\n        slides.forEach(slide => slide.classList.remove('calculator__slide_active'));\n        tabsBtn.forEach(btn => btn.classList.remove('calculator__tab_active'));\n\n        slides[index].classList.add('calculator__slide_active');\n        tabsBtn[index].classList.add('calculator__tab_active');\n    });\n});\n\n// slider\n\nconst rangeInputs = document.querySelectorAll('.calculator__input > input[type=range]');\nconst labels = document.querySelectorAll('.calculator__input > label');\nconst btnsForInputs = document.querySelectorAll('.calculator__input > .calculator__input-btn');\n\nconst changeLabel = (input, i) => {\n    labels[i].innerHTML = `${Math.trunc(+input.value/100)} м ${Math.floor((input.value/100 - Math.trunc(+input.value/100)).toFixed(2) * 100)} см`;\n}\n\nrangeInputs.forEach((input, i) => {\n    input.addEventListener('input', () => {\n        changeLabel(input, i);\n    });\n});\n\nbtnsForInputs.forEach(btn => {\n    btn.addEventListener('click', (e) => {\n        rangeInputs[btn.getAttribute('data-range') - 1].value = +rangeInputs[btn.getAttribute('data-range') - 1].value + +btn.getAttribute('data-step');\n        changeLabel(rangeInputs[btn.getAttribute('data-range') - 1], btn.getAttribute('data-range') - 1);\n    });\n});\n\n// forms\n\nconst forms = document.querySelectorAll('.calculator-form');\n\nconst ajaxSend = async (formData) => {\n    const fetchResp = await fetch('server.php', {\n        method: 'POST',\n        body: formData\n    });\n    if (!fetchResp.ok) {\n        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);\n    }\n    return await fetchResp.text();\n};\n\nforms.forEach(form => {\n    form.addEventListener('submit', (e) => {\n        e.preventDefault();\n\n        const formData = new FormData(form);\n        \n        ajaxSend(formData)\n                .then((response) => {\n                    document.querySelector('.calculator__slide-form > button').innerHTML = 'Данные отправлены!'\n                    console.log(response);\n                    form.reset(); // очищаем поля формы \n                })\n                .catch((err) => { \n                    console.error(err); \n                    document.querySelector('.calculator__slide-form > button').innerHTML = 'Ошибка :('\n                });\n        \n    });\n});\n\n//# sourceURL=webpack://calculator-kuhni/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;