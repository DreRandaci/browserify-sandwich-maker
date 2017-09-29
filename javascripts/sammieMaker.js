'use strict';

const data = require('./data');
// console.log('all items within sammieMaker', allItems);

let finalSandwichPrice = 0;
// let breadPrice = 0;
let sammiePrice = 0;
let checkedItem;
let currentSelectedItems = [];

const sammieMaker = (e) => {
  let items = data.getAllItems();
  console.log('all items variable in sammieMaker', items);
  // Get the value chosen from the DOM
    let selectedTopping = e.target.value;
    console.log('selectedTopping in sammieMaker:', selectedTopping);
  // Add the topping to the SandwichMaker to increase the total price
  for (let key in items) {
  	// Determine the price of the topping chosen
  	 if (selectedTopping === key && e.target.checked) {  		
  		finalSandwichPrice += items[key];
      checkedItem = e.target.value;
      currentSelectedItems.push(checkedItem);
  	} else if (selectedTopping === key && e.target.checked === false) {
  		finalSandwichPrice -= items[key];
  	} 
  }
  // sammiePrice = finalSandwichPrice + breadPrice;
  return finalSandwichPrice;
  // return checkedMeat;
};

module.exports = {sammieMaker};