'use strict';

const loadBread = require('./bread');
const loadCheese = require('./cheese');
const loadCondiments = require('./condiments');
const loadMeat = require('./meat');
const loadVeggies = require('./veggies');

let allItemsArray = [];
let allCheckedItems = [];

const errorFunction = () => {
	console.log('Error');
};

const whenBreadLoads = function(){
	let breadArray = JSON.parse(this.responseText).breadPrices;
	allItemsArray.push(breadArray);
	loadCheese(whenCheeseLoads, errorFunction);
};

const whenCheeseLoads = function(){
	let cheeseArray = JSON.parse(this.responseText).cheesePrices;
	allItemsArray.push(cheeseArray);
	loadCondiments(whenCondimentsLoad, errorFunction);
};

const whenCondimentsLoad = function(){
	let condimentsArray = JSON.parse(this.responseText).condimentPrices;
	allItemsArray.push(condimentsArray);
	loadMeat(whenVeggiesLoad, errorFunction);
};

const whenVeggiesLoad = function(){
	let veggieArray = JSON.parse(this.responseText).veggiePrices;
	allItemsArray.push(veggieArray);
	// combineArray(veggieArray);
};

// const combineArray = (veggieArray) => {
// 	veggieArray.forEach((item) => {
// 		breadArray.forEach((item)){

// 		}
// 	});	
// };

const initializer = () => {
	loadBread(whenBreadLoads, errorFunction);
};

module.exports = initializer;



