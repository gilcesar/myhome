/*
 This class abstracts the use of the gpio pins. This class can be utilized on any linux operating
 system that has gpio pins defined in the /sys/class/gpio directory. It is required that the gpio
 pins themselves are available for access by the user of this application, and may require a
 change of permissions.
 */
'use strict';
var fs = require('fs');
var Gpio = require('./Gpio');

module.exports = GpioProcessor;
 
var path = "/sys/class/gpio";
var pinList = [];

function GpioProcessor(){}

	/**
	 * Get function of specific pin.
	 * @param pin Desirable pin.
	 */
	function getPin(pin) {
		pinList.push(pin);
		exportPin(pin);
		return new Gpio(pin);
	}

	/**
	 * Get pin 23;
	 * @returns {Gpio}
	 */
	GpioProcessor.prototype.getPin23 = function() {
		return getPin(36);
	};

	/**
	 * Get pin 24.
	 * @returns {Gpio}
	 */
	GpioProcessor.prototype.getPin24 = function() {
		return getPin(12);
	};

	/**
	 * Get pin 25.
	 * @returns {Gpio}
	 */
	GpioProcessor.prototype.getPin25 = function() {
		return getPin(13);
	};

	/**
	 * Get pin 26.
	 * @returns {Gpio}
	 */
	GpioProcessor.prototype.getPin26 = function() {
		return getPin(69);
	};

	/**
	 * Get pin 27.
	 * @returns {Gpio}
	 */
	GpioProcessor.prototype.getPin27 = function() {
		return getPin(115);
	};

	/**
	 * Get pin 28.
	 * @returns {Gpio}
	 */
	GpioProcessor.prototype.getPin28 = function() {
		return getPin(901);
	};

	/**
	 * Get pin 29.
	 * @returns {Gpio}
	 */
	GpioProcessor.prototype.getPin29 = function() {
		return getPin(24);
	};

	/**
	 * Get pin 30.
	 * @returns {Gpio}
	 */
	GpioProcessor.prototype.getPin30 = function() {
		return getPin(25);
	};

	/**
	 * Get pin 31.
	 * @returns {Gpio}
	 */
	GpioProcessor.prototype.getPin31 = function() {
		return getPin(35);
	};

	/**
	 * Get pin 32.
	 * @returns {Gpio}
	 */
	GpioProcessor.prototype.getPin32 = function() {
		return getPin(34);
	};

	/**
	 * Get pin 33.
	 * @returns {Gpio}
	 */
	GpioProcessor.prototype.getPin33 = function() {
		return getPin(28);
	};

	/**
	 * Get pin 34.
	 * @returns {Gpio}
	 */
	GpioProcessor.prototype.getPin34 = function() {
		return getPin(33);
	};

	/**
	 * Enable access to GPIO.
	 * @param pin GPIO pin to access.
	 */
	function exportPin(pin){
		console.log("Exporting Pin");
	    var destination = path.concat("/export");
		fs.writeFileSync(destination, pin);
	};
	
	/**
	 * Disable access to GPIO.
	 * @param pin GPIO pin to disable access.
	 */
	function unexportPin(pin){
		console.log("unExporting Pin");
		var destination = path.concat("/unexport");
		fs.writeFileSync(destination, pin);
	};
	
	GpioProcessor.prototype.clearPins = function() {
	    for (var i = 0; i < pinList.length; i++) {
		unexportPin(pinList[i]);
                console.log("Disable pin: " + pinList[i]);
            }
	    pinList = [];
	};
	


