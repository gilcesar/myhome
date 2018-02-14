'use strict';

var iUtil = require('./gpio/Util');
var util = new iUtil();

var iGpioProcessor = require('./gpio/GpioProcessor');
var gpioProcessor = new iGpioProcessor();

var boardPins = [];
var boardDigValues = [];
var boardAnaValues = [];

/*var pin23 = gpioProcessor.getPinByNumber(23);
var pin24 = gpioProcessor.getPinByNumber(24);
var pin25 = gpioProcessor.getPinByNumber(25);
var pin26 = gpioProcessor.getPinByNumber(26);
var pin27 = gpioProcessor.getPinByNumber(27);
var pin28 = gpioProcessor.getPinByNumber(28);
var pin29 = gpioProcessor.getPinByNumber(29);
var pin30 = gpioProcessor.getPinByNumber(30);
var pin31 = gpioProcessor.getPinByNumber(31);
var pin32 = gpioProcessor.getPinByNumber(32);
var pin33 = gpioProcessor.getPinByNumber(33);
var pin34 = gpioProcessor.getPinByNumber(34);

*/
/*function configPin(out, number) {
	console.log('config pin ' + number + ' as ' + out? 'out' : 'in');
	var p = gpioProcessor.getPinByNumber(number);
	try{
		if(out){
			p.out(p.pin);
		}else{
			p.input(p.pin);
		}		
		boardPins.push(p);
		return p;
	}catch(ex){
		gpioProcessor.unexportPin(p);
		console.log("config error. pin= " + i + ". Message: " + ex.message);
	}
}

exports.getPin23 = function(out){
	return configPin(out, 23);
}

exports.getPin24 = function(out){
	return configPin(out, 24);
}

exports.getPin25 = function(out){
	return configPin(out, 25);
}

exports.getPin26 = function(out){
	return configPin(out, 26);
}

exports.getPin27 = function(out){
	return configPin(out, 27);
}

exports.getPin28 = function(out){
	return configPin(out, 28);
}

exports.getPin29 = function(out){
	return configPin(out, 29);
}

exports.getPin30 = function(out){
	return configPin(out, 30);
}

exports.getPin31 = function(out){
	return configPin(out, 31);
}

exports.getPin32 = function(out){
	return configPin(out, 32);
}

exports.getPin33 = function(out){
	return configPin(out, 33);
}

exports.getPin34 = function(out){
	return configPin(out, 34);
}*/

/*exports.readDigValues = function () {
	var i;
	for(i=0; i < gpioPins.length; i++){
		boardDigValues.push(gpioPins[i].getValue(gpioPins[i].pin));
	}
	return boardDigValues;
}

exports.readAnaValues = function () {
	var i;
	for(i=0; i < gpioPins.length; i++){
		boardDigValues.push(gpioPins[i].getValue(gpioPins[i].pin));
	}
	return boardAnaValues;
}*/

setTimeout(function () {
	//console.log('clear');
	//gpioProcessor.clearPins();
}, 20*1000);

//gpioProcessor.clearPins()





