SET foreign_key_checks = 0;
DROP TABLE IF EXISTS project, language, card;
SET foreign_key_checks = 1;

USE portfolio;

CREATE TABLE project (
    id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  website TEXT,
  picture BLOB,
    date DATE
);

CREATE TABLE language (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL
);

CREATE TABLE card (
    project_id INT,
    language_id INT,
    FOREIGN KEY (project_id) REFERENCES project(id),
    FOREIGN KEY (language_id) REFERENCES language(id),
    PRIMARY KEY (project_id, language_id)
);

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