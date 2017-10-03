'use strict';

const buildSammie = require('./sammieMaker');
const data = require('./data');

let container = document.getElementById('container');
let sammieContainer = document.getElementById('sammieContainer');
let btn = document.getElementById("btn");
let allOptions = document.getElementsByTagName('input');

const btnCheck = () => {
    container.addEventListener('change', (e) => {
        if (e.target.type === "checkbox") {
            e.target.parentNode.children[3].checked = false;
        } else if (e.target.type === "radio") {
            let currentCheckboxesToClear = e.target.parentNode.children;
            for (let i = 0; i < currentCheckboxesToClear.length; i++) {
                if (currentCheckboxesToClear[i].type.toLowerCase() == 'checkbox') {
                    currentCheckboxesToClear[i].checked = false;
                }
            }
        }
    });
};

const btnClick = () => {
    btn.addEventListener('click', (e) => {
        let checkedToppings = [];
        for (let i=0; i<allOptions.length; i++){
            if (allOptions[i].checked) {
                checkedToppings.unshift(allOptions[i].value);
            }
        }
        writeToDom(checkedToppings, buildSammie.sammiePrice(checkedToppings));
    });
};

const clearDom = () => {
	sammieContainer.innerHTML = '';
};
const writeToDom = (checkedToppings, price) => {
    clearDom();
	checkedToppings.forEach((topping) => {
		sammieContainer.innerHTML += `<h4>${topping}</h4>`;
	});
	sammieContainer.innerHTML += `Total: $${price}`;
};

module.exports = {btnClick, writeToDom, btnCheck};