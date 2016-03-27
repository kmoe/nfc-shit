var nfc  = require('nfc').nfc;
var util = require('util');
var serialport = require('serialport');
var pn532 = require('pn532');

// console.log(nfc);
//
// console.log(serialport);

// console.log('version: ' + util.inspect(nfc.version(), { depth: null }));
//     // { name: 'libfnc', version: '1.7.0' }

// console.log('devices: ' + util.inspect(nfc.scan(), { depth: null }));
//     // { 'pn53x_usb:160:012': { name: 'SCM Micro / SCL3711-NFC&RW', info: { chip: 'PN533 v2.7', ... } } }


// var SerialPort = serialport.SerialPort;

// var ftdiPort = new SerialPort("/dev/tty.usbserial-AH03B1EK", {
//   baudrate: 9600,
//   parser: serialport.parsers.readline("\n")
// });


// serialport.list(function (err, ports) {
//   ports.forEach(function(port) {
//     console.log(port.comName);
//     console.log(port.pnpId);
//     console.log(port.manufacturer);
//   });
// });


// ftdiPort.on("open", function () {
//   console.log('Serial Port Open');
//   console.log('=================');
//   ftdiPort.on('data', function(data) {
//     console.log('Card UID: ',data);
//   });
// });


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
