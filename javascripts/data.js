'use strict';

const loadBread = require('./bread');
const loadCheese = require('./cheese');
const loadCondiments = require('./condiments');
const loadMeat = require('./meat');
const loadVeggies = require('./veggies');

let breadArray = [];
let cheeseArray = [];
let condimentsArray = [];
let veggieArray = [];
let meatArray = [];
let allItemsArray = [{'category': 'all items'}];

const errorFunction = () => {
	console.log('Error');
};

const whenBreadLoads = function(){
	breadArray = JSON.parse(this.responseText).breadPrices;
	loadCheese(whenCheeseLoads, errorFunction);
};

const whenCheeseLoads = function(){
	cheeseArray = JSON.parse(this.responseText).cheesePrices;
	loadCondiments(whenCondimentsLoad, errorFunction);
};

const whenCondimentsLoad = function(){
	condimentsArray = JSON.parse(this.responseText).condimentPrices;
	loadMeat(whenMeatLoads, errorFunction);
};

const whenMeatLoads = function(){
	meatArray = JSON.parse(this.responseText).meatPrices;
	loadVeggies(whenVeggiesLoad, errorFunction);
};

const whenVeggiesLoad = function(){
	veggieArray = JSON.parse(this.responseText).veggiePrices;
	combineArrays();
};

const initializer = () => {
	loadBread(whenBreadLoads, errorFunction);
};

const combineArrays = () => {
	breadArray.forEach((bread)=> {
		cheeseArray.forEach((cheese) => {
			condimentsArray.forEach((condiment) => {
				meatArray.forEach((meat) => {
					veggieArray.forEach((veggie) => {
						allItemsArray.forEach((item) => {				
							if (veggie.id === meat.id){								
								item.panda = meat.Panda;
								item.droggon = meat.Droggon;
								item.turkey = meat.Turkey;
								item.noMeat = meat.None;
								item.oil = condiment.Oil;
								item.mayo = condiment.Mayo;
								item.mustard = condiment.Mustard;
								item.noSauce = condiment.None;
								item.goat = cheese.Goat;
								item.chevre = cheese.Chevre;
								item.gruyere = cheese.Gruyere;
								item.noCheese = cheese.None;
								item.kaiser = bread.Kaiser;
								item.wonderBread = bread.WonderBread;
								item.spelt = bread.Spelt;
								item.noBread = bread.None;
								item.peppers = veggie.Peppers;
								item.arugula = veggie.Arugula;
								item.tomato = veggie.Tomato;
								item.noVeggies = veggie.None;
							}	
						});
					});
				});
			});
		});
	});
};

const getAllItems = () => {
	return allItemsArray[0];
};

module.exports = {initializer, getAllItems};
