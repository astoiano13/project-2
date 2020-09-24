DROP DATABASE IF EXISTS game_score;  

CREATE DATABASE game_score;

CREATE TABLE game_score (
    game_id int(10) PRIMARY KEY AUTO_INCREMENT,
    player_time NOT_NULL DEFAULT CURRENT_TIMESTAMP, 
);
