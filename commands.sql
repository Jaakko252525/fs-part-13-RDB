


CREATE TABLE Blogs (
    id SERIAL PRIMARY KEY,
    author VARCHAR(255),
    url VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    likes INT DEFAULT 1
);



INSERT INTO Blogs (author, url, title, likes) VALUES 
('Jaakko', 'https://test.com/blog1', 'fullstack blogi', 10),
('jaakko 2', 'https://example.com/blog2', 'Second Blog Post', 0);



('testi_1', 'testi_1', 'testi_1', 0);


CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    name VARCHAR(255) NOT NULL,
    Role VARCHAR(255) NOT NULL
);


INSERT INTO Users (username, name, Role) VALUES 
('Jaakko', 'jp', 'USER'),
('pert', 'ti', 'USER');

