'use strict';

const loadBread = require('./bread');
const loadCheese = require('./cheese');
const loadCondiments = require('./condiments');
const loadMeat = require('./meat');
const loadVeggies = require('./veggies');

//TODO: get rid of unnecessary global arrays, move to inside each function
// let breadArray = [];
// let cheeseArray = [];
// let condimentsArray = [];
// let veggieArray = [];
// let meatArray = [];
let allItemsArray = [];

const errorFunction = () => {
	console.log('Error');
};

const whenBreadLoads = function(){
	allItemsArray.push(JSON.parse(this.responseText).breadPrices);
	loadCheese(whenCheeseLoads, errorFunction);
};

const whenCheeseLoads = function(){
	allItemsArray.push(JSON.parse(this.responseText).cheesePrices);
	loadCondiments(whenCondimentsLoad, errorFunction);
};

const whenCondimentsLoad = function(){
	allItemsArray.push(JSON.parse(this.responseText).condimentPrices);
	loadMeat(whenMeatLoads, errorFunction);
};

const whenMeatLoads = function(){
	allItemsArray.push(JSON.parse(this.responseText).meatPrices);
	loadVeggies(whenVeggiesLoad, errorFunction);
};

const whenVeggiesLoad = function(){
	allItemsArray.push(JSON.parse(this.responseText).veggiePrices);
};

const initializer = () => {
	loadBread(whenBreadLoads, errorFunction);
};

const getAllItems = () => {
	//creates one object out of the array
	let allItems = Object.assign({}, allItemsArray);
	return allItems;
};

module.exports = {initializer, getAllItems};
