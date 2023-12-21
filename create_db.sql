# CREATE DATABASE muscleApp;

# select the DATABASE
USE muscleApp;

CREATE USER 'appuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'qwerty';
GRANT ALL PRIVILEGES ON muscleApp.* TO 'appuser'@'localhost';


# Create the user table to store user details
CREATE TABLE user_details (
  user_id INT NOT NULL UNIQUE AUTO_INCREMENT,
  firstname VARCHAR(20) NOT NULL,
  surname VARCHAR(20) NOT NULL,
  username VARCHAR(15) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL,
  hashedPassword VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)
);







