'use strict';

const data = require('./data');
const events = require('./events');

const sammiePrice = (checkedToppings) => {
  let price = 0;
  let allItems = data.getAllItems();
  let objLength = Object.keys(allItems).length;
  let objKeys = Object.keys(allItems);
  let objValues = Object.values(allItems);
  for (let i=0; i<objLength; i++){
    for (let j=0; j<checkedToppings.length; j++){
      if (objKeys[i] === checkedToppings[j]) {  	
        price += objValues[i];
      }
    }
  }
  return price;
};

module.exports = {sammiePrice};