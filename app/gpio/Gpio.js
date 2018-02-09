'use strict';

var fs = require('fs');

module.exports = Gpio;

var path = "/sys/class/gpio";
//var pin;

/**
 * Set desirable pin for the GPIO class.
 */
function Gpio(gpioPin){
	this.pin = gpioPin;
	console.log("Gpio Contructor: " + this.pin);
}

 
/**
 * Set pin direction.
 * @param pin Desirable pin.
 * @param pin Direction of pin.
 *      in -> Input.
 *      out -> Output.
 * 
 */
function setDirection(pin,direction) {
	console.log("Setting Direction pin " + pin);
	var destination = path.concat("/gpio", pin, "/direction");
	fs.writeFileSync(destination, direction);
};

/**
 * Set pin value.
 * @param pin Desirable pin.
 * @param value Value of pin.
 * 	0 -> Low Level.
 *	1 -> High Level
 */
function setValue(pin, value) {
	console.log("Setting value: " + value + " pin " + pin);
	var destination = path.concat("/gpio", pin, "/value");
	fs.writeFileSync(destination, value);
};

/**
 * Get pin direction.
 * @param pin Desirable pin.
 * @returns Direction of pin
 *      in -> Input.
 *      out -> Output.
 * 
 */
Gpio.prototype.getDirection = function(pin) {
	console.log("Get direction");
	var destination = path.concat("/gpio", pin, "/direction");
	var contents = fs.readFileSync(destination).toString();
	return contents;
};

/**
 * Get pin value.
 * @param pin Desirable pin.
 * @returns Value of pin
 * 	0 -> Low Level.
 *	1 -> High Level
 */
Gpio.prototype.getValue = function(pin) {
	console.log("Get value");
	var destination = path.concat("/gpio", pin, "/value");
	var contents = fs.readFileSync(destination).toString();
	return contents;
};

/**
 * Set pin as high.
 * @param pin Desirable pin.
 */
Gpio.prototype.high = function(pin) {
	setValue(pin, '1');
};

/**
 * Set pin as low.
 * @param pin Desirable pin.
 */
Gpio.prototype.low = function(pin) {
	setValue(pin, '0');
};

/**
 * Set pin as output.
 * @param pin Desirable pin.
 */
Gpio.prototype.out = function(pin) {
	setDirection(pin, "out");
};


/**
 * Set pin as input.
 * @param pin - Desirable pin.
 */
Gpio.prototype.input = function(pin){
	setDirection(pin,"in");
};

/**
 * 
 */







