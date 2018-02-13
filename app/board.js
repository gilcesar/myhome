'use strict';

var iUtil = require('./gpio/Util');
var util = new iUtil();

var iGpioProcessor = require('./gpio/GpioProcessor');
var gpioProcessor = new iGpioProcessor();

var gpioPins = [];
var boardDigValues = [];
var boardAnaValues = [];

function config() {
	console.log('pins config');
	var i;
	for(i=23; i <= 34; i++){
		var pin = gpioProcessor.getPinByNumber(i);
		pin.input(pin.pin);
		gpioPins.push(pin);
	}
}


exports.readDigValues = function () {
	var i;
	for(i=0; i < gpioPins.length; i++){
		boardDigValues.push(gpioPins[i].getValue(gpioPins[i]));
	}
}

exports.readAnaValues = function () {
	var i;
	for(i=0; i < gpioPins.length; i++){
		boardDigValues.push(gpioPins[i].getValue(gpioPins[i]));
	}
}

config();

//gpioProcessor.clearPins();




