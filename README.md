# Authors 

Yerzhan Assulan and Issatai Sultanbi

# SGIMS arduino robot code

This Arduino sketch is designed for a 2-wheeled robot equipped with a GPS module, bluetooth module, compass sensor, DHT11 temperature and humidity sensor, MQ135 air quality sensor, and a capacitive soil moisture sensor. The code allows the robot to navigate to a specified GPS waypoint, stop at the waypoint, lower a servo motor to 90 degrees, and log data from the various sensors.

## Table of Contents

- [Features](#features)
- [Dependencies](#dependencies)
- [Hardware Setup](#hardware-setup)
- [Instructions](#instructions)
- [Contributing](#contributing)

## Hardware Setup

1. Connect your 2-wheeled robot's motor pins to the Arduino.
2. Connect the GPS module to the designated software serial pins (e.g., 7 and 8).
3. Connect the compass sensor to the I2C pins on your Arduino.
4. Connect the DHT11 sensor and capacitive soil moisture sensor to their respective pins.
5. Connect the MQ135 sensor to its analog pin (A0 in this example).
6. Connect the servo motor to a suitable pin on your Arduino (e.g., pin 11).
7. Connect the bluetooth module(HC-05) to RX and TX pins.

Make sure to check the pin assignments and connections in the code and modify them according to your hardware setup.

## Instructions

1. Upload the provided Arduino code to your Arduino board using the Arduino IDE or any compatible development environment.
2. Ensure that your robot is in an open area with a clear GPS signal.
3. Power up your robot and monitor the Serial Monitor for debugging information.
4. The robot should navigate towards the specified GPS waypoint.
5. When it reaches the waypoint, it will stop, lower the servo motor to 90 degrees, and log data from the sensors.
6. Modify the sensor data logging and processing as needed for your project.
   
## Features

- GPS-based navigation to a specified waypoint.
- Compass sensor integration for heading correction.
- DHT11 sensor for temperature and humidity data.
- MQ135 sensor for air quality monitoring.
- Capacitive soil moisture sensor for soil moisture level.
- Servo motor control for manipulator movement.
- Data logging for temperature, humidity, air quality, and soil moisture.
- Customizable motor control and navigation parameters.
- Bluetooth module for data transfer.

## Dependencies

- [Adafruit HMC5883L](https://github.com/adafruit/Adafruit_HMC5883_Unified) library for the HMC5883L compass sensor.
- [DHT Sensor Library](https://github.com/adafruit/DHT-sensor-library) for the DHT11 sensor.
- [MQ135](https://github.com/GeorgK/MQ135) for the MQ135 sensor.
- [GyverMotor](https://github.com/GyverLibs/GyverMotor) library for motor control (assuming you are using GyverMotor).
- [Servo](https://www.arduino.cc/en/Reference/Servo) library for the servo motor control.
- [SoftwareSerial](https://www.arduino.cc/en/Reference/SoftwareSerial) library for the GPS module.
Install these libraries using the Arduino Library Manager (Tools > Manage Libraries) before uploading the code to your Arduino board.

## Contributing

Contributions to this project are welcome. Feel free to open issues or pull requests to suggest improvements or report bugs.
