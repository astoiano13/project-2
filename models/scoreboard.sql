DROP DATABASE IF EXISTS game_score;  

CREATE DATABASE game_score;

CREATE TABLE game_score (
    game_id int(10) PRIMARY KEY AUTO_INCREMENT,
    player_time NOT_NULL DEFAULT CURRENT_TIMESTAMP, 
);

CREATE TABLE user (
    userId int(12) AUTO_INCREMENT;
    email VARCHAR(255) NOT_NULL UNIQUE;
    password VARCHAR(100) NOT_NULL
)

CREATE TABLE scores (
    scoreID PRIMARY KEY;
    score INT(5);
    userId FOREIGN KEY;
)