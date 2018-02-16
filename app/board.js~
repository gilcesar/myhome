'use strict';

var iUtil = require('./gpio/Util');
var util = new iUtil();

var iGpioProcessor = require('./gpio/GpioProcessor');
var gpioProcessor = new iGpioProcessor();

function configPin(out, number) {
	console.log('config pin ' + number + ' as ' + (out? 'out' : 'in'));
	var p = gpioProcessor.getPinByNumber(number);
	try{
		if(out){
			p.out(p.pin);
		}else{
			p.input(p.pin);
		}		
		return p;
	}catch(ex){
		gpioProcessor.clearPins();
		console.log("config error. pin= " + number + ". Message: " + ex.message);
	}
}


exports.getPinStatus = function(pin){
	//var p = configPin(false, pin);//modo leitura
var p = gpioProcessor.getPinByNumber(pin);
	return p.getValue(p.pin);
}

exports.setPin = function(pin){
	console.log('---- set ' + pin);
	var p = configPin(true, pin);//modo escrita
	return p.high(p.pin);
}

exports.unsetPin = function(pin){
	//console.log('---- unset ' + pin);
	var p = configPin(true, pin);//modo escrita
	return p.low(p.pin);
}
//gpioProcessor.clearPin(27);
