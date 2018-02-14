    
const SerialPort = require('serialport');
const parsers = SerialPort.parsers;

const parser = new parsers.Readline({
  delimiter: '\r'
});

const port = new SerialPort('/dev/ttyUSB0', {
  baudRate: 9600
});

port.pipe(parser);

exports.open = function () {
	port.on('open', () => console.log('Volt connected!'));
};

var last = {};

parser.on('data', function(data){
	var cleanValues = data.replace(/[^0-9;]|/gm, '').trim();
	if(cleanValues.length > 10){
		last = toObj(cleanValues);
	}
});


exports.request = function () {
	port.write('sts\r');
	return last;
	//return {"r":222};
}


exports.setListener = function(callback){
	//register(callback);
}

function toObj(data){
	var values = data.split(';');
	var voltObj = {
		time			:new Date(),
		entryTension	:values[0] /10,
		exitTension		:values[1] /10,
		exitCurrent		:values[2] /10,
		activePower		:values[3],
		bateryTension	:values[4] /10,
		currentLoad		:values[5] /10,
		status			:values[6] == '0' ? "off" : "on",
		events			:eventToString(values[7]),
		spare			:values[8]
	};
	return voltObj;
}

function eventToString(value){
	return value == 0? "Line Mode" : 
	value == 4? "Overload" :
	value == 1000? "Inversor Mode" :
	value; 
}

console.log('Volt On');