'use strict';

const buildSammie = require('./sammieMaker');
const data = require('./data');

let container = document.getElementById('output');
let sammieContainer = document.getElementById('sammieContainer');
let btn = document.getElementById("btn");
let allOptions = document.getElementsByTagName('input');
console.log('allOptions.length: ', allOptions.length);
let allCheckedItems = [];


btn.addEventListener('click', (e) => {
    let checkedToppings = [];
    for (let i=0; i<allOptions.length; i++){
        if (allOptions[i].checked) {
            checkedToppings.unshift(allOptions[i].value);
        }
    }
    console.log('this should be the checked items:', checkedToppings);
    combineToppings(checkedToppings);
});

const combineToppings = (checkedToppings) => {
    let allItems = data.getAllItems();
    console.log('allItems in combineToppings', allItems);
    
    // for (let i=0; i<allItems[0].length; i++) {
    //     console.log('price in combineToppings', allItems[i]);
    // }
    // clearDom();
    // writeToDom();
};

btn.addEventListener('click', (e) => {
    clearDom();
});

const writePrice = (price) => {
	sammieContainer.innerHTML = `Total: $${price}`;
};
const clearDom = () => {
	sammieContainer.innerHTML = '';
};
const writeToDom = (sammieAndBreadCombinedPrice) => {
	allCheckedItems.forEach(function(topping) {
		sammieContainer.innerHTML += `<li>${topping}</li>`;
	});
	//sammieContainer.innerHTML += `Total: $${sammieAndBreadCombinedPrice}`;
};