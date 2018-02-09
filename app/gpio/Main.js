'use strict';

/*Import of files.*/
var iUtil = require('./Util');
var util = new iUtil();

var iGpioProcessor = require('./GpioProcessor');
var gpioProcessor = new iGpioProcessor();

/*Declaration of variables.*/
var gpioPin27;
var gpioPin29;
var buttonValue;
var count=0;

/*Get reference of GPIO27 and GPIO29.**/
gpioPin27 = gpioProcessor.getPin27();
gpioPin29 = gpioProcessor.getPin29();

/*Set GPIO27 as output.
 *Set GPIO29 as input. 
 */
gpioPin27.out(gpioPin27.pin);
gpioPin29.input(gpioPin29.pin);


while(count < 20) {
	count++;
	
	/*Read value of GPIO29.*/
	buttonValue = gpioPin29.getValue(gpioPin29.pin);
	console.log("Button value: " + buttonValue);
	//if (buttonValue == 0) {
			//Set GPIO27 as low level.
            gpioPin27.low(gpioPin27.pin);
	util.sleep(1);
	//} else {
			//Set GPIO27 as high level.
            gpioPin27.high(gpioPin27.pin);
	//}

	util.sleep(1);
	
}

/*Disable access GPIO27 and GPIO29.*/
gpioProcessor.clearPins();





