'use strict';

module.exports = Util;

function Util(){}

/**
 * Delay function.
 * @param seconds Amount of seconds.
 */
Util.prototype.sleep = function(seconds) {
	var e = new Date().getTime() + (seconds * 1000);
	while (new Date().getTime() <= e) {}
};