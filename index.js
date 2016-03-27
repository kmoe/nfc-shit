var pn532 = require('pn532');
var SerialPort = require('serialport').SerialPort;

var serialPort = new SerialPort('/dev/tty.usbserial-AH03B1EK', { baudrate: 115200 });
var rfid = new pn532.PN532(serialPort);

console.log('init');

rfid.on('ready', function() {
    console.log('Listening for a tag scan...');
    rfid.on('tag', function(tag) {
        console.log('tag:', tag.uid);
    });
});
