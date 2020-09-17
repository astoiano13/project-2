DROP DATABASE IF EXISTS conquest;

CREATE DATABASE conquest; 

USE conquest; 
 
CREATE TABLE players(
id INT AUTO_INCREMENT, 
char_name VARCHAR(75), 
completed_game ENUM('yes','no'),
 
);
INSERT INTO players (char_name, completed_game) VALUES ('Fox', 'yes'); 
***Ignore this line for the current moment***