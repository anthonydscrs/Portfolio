SET foreign_key_checks = 0;
DROP TABLE IF EXISTS card;
DROP TABLE IF EXISTS project;
DROP TABLE IF EXISTS user;

USE portfolio;

CREATE TABLE `user` (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(100) UNIQUE NOT NULL,
  hashedPassword VARCHAR(100) NOT NULL,
  admin BOOL DEFAULT 0,
  PRIMARY KEY (id)
)
ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE project (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  website TEXT,
  picture TEXT,
  github TEXT,
  date VARCHAR(60),
  PRIMARY KEY (id)
)
ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE card (
  id INT NOT NULL AUTO_INCREMENT,
  project_id INT,
  Htmlcss VARCHAR(50),
  Javascript VARCHAR(50),
  React VARCHAR(50),
  Node VARCHAR(50),
  Express VARCHAR(50),
  MySQL VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (project_id) REFERENCES project(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO user (email, hashedPassword, admin)
VALUES
('ad.discours@gmail.com', '$argon2id$v=19$m=19456,t=2,p=1$t8ar2ifDLTg8/pQsJOiGuA$eMyaf9+lTcmElZeKhjz8vNy3NuMVVRMy4GLkAqFr/AI', 1);

INSERT INTO project (name, description, website, picture, github, date)
VALUES
('Wildked''in', 'This is my first project as part of my training at the Wild Code School. I was working with 3 others comrads for two weeks. The project was about presenting the students of our class under the form of a portfolio. We used HTML, CSS, Javascript and git/GitHub.', 'https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-WeWildin/', "https://i.imgur.com/ehJFWvH.png", 'https://github.com/anthonydscrs/2023-02-JS-FT-Lyon-P1-WeWildin', '2023-03'),
('Keskonregarde?', 'This is my project n°2 as part of my training at the Wild Code School. The project was about helping you search a movie/series according to your desires. It was the first time we worked on the backend and we used our first API, TMDB API. I was working with 2 comrades for a period of 1 month during our 3rd month of training.', 'https://keskonregarde.netlify.app/', "https://i.imgur.com/cLRCCA1.jpg", 'https://github.com/anthonydscrs/2023-02-JS-FT-Lyon-P2-Keskonregarde' , '2023-04'),
('Externatic', 'This is my third and last project as part of my training at the WCS. We worked for a company called Externatic. They asked us to develop a website aimed at candidates looking for jobs in IT. We had to create the backend from scratch for the first time (MVC, authentification, database...)', 'https://externatic.lyon-2.wilders.dev/', 'https://i.imgur.com/4O27a1q.png', 'https://github.com/anthonydscrs/2023-02-JS-FT-Lyon-P3-Externatic' , '2023-06/2023-07'),
('Smart Compagnon', 'Our first hackathon during our training. We were a group of 3 who worked during 48 hours for the company Emmaüs Connect. They asked us to build a website to help Les Compagnons to evaluate the price of a smartphone and be more efficient at work. We were quite free to develop other functionalities.', 'https://github.com/marceloxhenrique/Hackathon-2WildCodeSchool', 'https://i.imgur.com/t8Vm8cm.png', 'https://github.com/anthonydscrs/Hackathon-2WildCodeSchool', '2023-06');

INSERT INTO card (project_id, Htmlcss, Javascript, React, Node, Express, MySQL)
VALUES
(1, 'HTML/CSS', 'Javascript', NULL, NULL, NULL, NULL),
(2, 'HMTL/CSS', 'Javascript', 'ReactJS', 'NodeJS', NULL, NULL),
(3, 'HTML/CSS', 'Javascript', 'ReactJS', 'NodeJS', 'ExpressJS', 'MySQL'),
(4,'HTML/CSS', 'Javascript', 'ReactJS', 'NodeJS', 'ExpressJS', 'MySQL');

SET foreign_key_checks = 1;
