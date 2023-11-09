#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_HMC5883_U.h>
#include <GyverMotor.h>
#include <Servo.h>
#include <SoftwareSerial.h>
#include <DHT.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_MQ135.h>
#include <TinyGPS++.h>

#define waypointAmount 0

GMotor motorLeft(DRIVER2WIRE, 2, 3, HIGH);
GMotor motorRight(DRIVER2WIRE, 4, 9, HIGH);
int currentWaypoint = 0;
float waypoints[waypointAmount] = {} // add waypoints for the target district of the city
TinyGPSPlus gps;

SoftwareSerial SoftSerial(7, 8);  // RX, TX pins for the GPS module
SoftwareSerial bluetoothSerial(2, 3); 

// defining compass
Adafruit_HMC5883_Unified compass = Adafruit_HMC5883_Unified(12345);
float currentLongitude, currentLatitude, targetLatitude, targetLongtitude;

// defining servo motor manipulator
Servo manipulatorServo;
unsigned long TIME_LAST=0;

// defining dht sensor
#define DHTPIN 12  // Pin where the DHT11 is connected
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

// defining mq135 sensor
#define MQ135PIN A0  
Adafruit_MQ135 gasSensor = Adafruit_MQ135(MQ135PIN);

string temperatures = "";
string humidities = "";
string smoistures = "";
string aqi = "";


void initCompass() {
  if (!compass.begin()) {
    Serial.println("Could not find a valid HMC5883L sensor");
    while (1);
  }
}

float calculateHeading(float currentLat, float currentLon, float targetLat, float targetLon) {
  // Calculate the difference in latitude and longitude
  float deltaLat = targetLat - currentLat;
  float deltaLon = targetLon - currentLon;

  // Calculate the heading without considering the robot's orientation
  float heading = atan2(deltaLon, deltaLat) * 180 / PI;

  // Read the robot's current orientation from the compass sensor
  sensors_event_t event;
  compass.getEvent(&event);

  // Correct the heading by subtracting the current orientation
  heading -= event.orientation.x;

  // Normalize the heading to be in the range of 0 to 360 degrees
  if (heading < 0) {
    heading += 360;
  }

  return heading;
}

float distanceToWaypoint(float lat1, float lon1, float lat2, float lon2) {
  // Radius of the Earth in meters
  float earthRadius = 6371000.0;

  // Convert latitude and longitude from degrees to radians
  lat1 = radians(lat1);
  lon1 = radians(lon1);
  lat2 = radians(lat2);
  lon2 = radians(lon2);

  // Haversine formula to calculate the distance
  float dlat = lat2 - lat1;
  float dlon = lon2 - lon1;
  float a = sin(dlat / 2) * sin(dlat / 2) + cos(lat1) * cos(lat2) * sin(dlon / 2) * sin(dlon / 2);
  float c = 2 * atan2(sqrt(a), sqrt(1 - a));
  float distance = earthRadius * c;

  return distance;
}

// Function to store sensor data in memory
void storeSensorDataInMemory() {
  // Read data from the DHT11 sensor (temperature and humidity)
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  // Read data from the MQ135 sensor (air quality)
  float airQuality = gasSensor.readCO2();

  // Read data from the Capacitive Soil Moisture sensor
  int soilMoisture = analogRead(A1); 
  temperatures += String(temperature);
  humidities +=  String(humidity);
  smoistures += String(soilMoisture);
  aqi += String(airQuality);

}

void sendDataToStation() {

    bluetoothSerial.println(temperatures);
    bluetoothSerial.println(humidities);
    bluetoothSerial.println(smoistures);
    bluetoothSerial.println(aqi);

}

void setup() {
  // Initialize motors
    motorLeft.setMode(FORWARD);
    motorRight.setMode(FORWARD)

  // Initialize the GPS module
  SoftSerial.begin(9600);
  bluetoothSerial.begin(9600);

  initCompass();
  manipulatorServo.attach(11);  
  dht.begin();

  Serial.begin(9600);

  delay(1000);
}




void loop() {
  // Read GPS data
  while (SoftSerial.available() > 0) {

     if (gps.encode(SoftSerial.read())) {
 
      if (gps.location.isValid()) {
      
        currentLatitude = gps.location.lat();
  
        currentLongitude = gps.location.lng();
        
      }
     }
  }

  // Calculate the heading
  float heading = calculateHeading(currentLatitude, currentLongitude, targetLatitude, targetLongitude);

    int leftMotorSpeed = 100;  
    int rightMotorSpeed = 100; // motor speed

    // Control the left and right motors based on the calculated heading
    if (heading < 180) {
      // Turn left
      motorLeft.setPower(-leftMotorSpeed);
      motorRight.setPower(rightMotorSpeed);
    } else {
      // Turn right
      motorLeft.setPower(leftMotorSpeed);
      motorRight.setPower(-rightMotorSpeed);
    }

    // check if the robot has reached waypoint
    if (distanceToWaypoint(currentLatitude, currentLongitude, targetLatitude, targetLongitude) < 0.08 && millis() - TIME_LAST > 120000) {
        
           motorLeft.stop();
           motorRight.stop();

        if (currentWaypoint == waypointAmount - 1) {

            bluetoothSerial.print("AT+ROLE1\r\n"); // set robot as master
            bluetoothSerial.print("AT+CON" + pcDeviceName + "\r\n");4

            sendDataToStation();

            cli(); 
            while(1);  // ending programm

        }

        else {

              manipulatorServo.write(90);
              storeSensorDataInMemory();
                 // Read data from the sensors and store it in memory

                   delay(30000);
                    manipulatorServo.write(0);

                    waypoints += 1;
                    targetLongitude = waypointLongitude[waypoints];
                    targetLatitude = waypointLatitude[waypoints];
     
              TIME_LAST = millis();

    }
  }
}


// authors: Issatay Sultanbi, Yerzhan Assulan
// projectname: SGIMS | Smart Green Infrastructure Monitoring System