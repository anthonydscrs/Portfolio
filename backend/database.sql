SET foreign_key_checks = 0;
DROP TABLE IF EXISTS card;
DROP TABLE IF EXISTS language;
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
  name VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  website TEXT,
  picture BLOB,
  date DATE,
  PRIMARY KEY (id)
)
ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE `language` (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE card (
  id INT NOT NULL AUTO_INCREMENT,
  project_id INT,
  language_id INT,
  FOREIGN KEY (project_id) REFERENCES project(id),
  FOREIGN KEY (language_id) REFERENCES language(id),
  PRIMARY KEY (id)
)
ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO user (email, hashedPassword, admin)
VALUES
('ad.discours@gmail.com', '$argon2id$v=19$m=19456,t=2,p=1$t8ar2ifDLTg8/pQsJOiGuA$eMyaf9+lTcmElZeKhjz8vNy3NuMVVRMy4GLkAqFr/AI', 1);

INSERT INTO project (name, description, website, picture, date)
VALUES
('Project 1', 'Description of Project 1', 'http://example.com/project1', NULL, '2022-01-01'),
('Project 2', 'Description of Project 2', 'http://example.com/project2', NULL, '2022-02-02'),
('Project 3', 'Description of Project 3', 'http://example.com/project3', NULL, '2022-03-03');

INSERT INTO language (title)
VALUES
('HTML/CSS'),
('Javascript'),
('ReactJS'),
('Node.JS'),
('ExpressJS');

INSERT INTO card (project_id, language_id)
VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5);

SET foreign_key_checks = 1;
