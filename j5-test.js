var five = require('johnny-five');
var arduino = new five.Board();

var celsius = 0;
var light = 0;
var moisture = 0;

arduino.on('ready', function() {

    var yellowLed = new five.Led(4);
    var redLed = new five.Led(2);
    
    var thermometer = new five.Thermometer({
        controller: 'LM35',
        pin: 'A0',
        freq: 1000
    });

    var lightSensor = new five.Sensor({
        pin: 'A1',
        freq: 1000
    });

    var moistureSensor = new five.Sensor({
        pin: 'A2',
        freq: 1000
    });

    thermometer.on('data', function(){
        celsius = this.C;
        fahrenheit = this.F;
    });

    lightSensor.on('data', function(){        
        light = this.value;
        console.log(light);

        if (light < 130) {
            yellowLed.on();
        } else {
            yellowLed.off();
        }
    });

    moistureSensor.on('data', function(){
        moisture = this.value;
        console.log(moisture);

        if (moisture > 500) {
            redLed.on();
        } else {
            redLed.off();
        }
    });
});
