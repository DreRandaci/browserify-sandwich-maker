'use strict';

const loadVeggie = (onVeggieLoad, onVeggieError) => {
	const veggieLoader = new XMLHttpRequest();
	veggieLoader.addEventListener('error', onVeggieError);
	veggieLoader.addEventListener('load', onVeggieLoad);
	veggieLoader.open('GET', '../json/veggies.json');
	veggieLoader.send();
};

module.exports = loadVeggie;