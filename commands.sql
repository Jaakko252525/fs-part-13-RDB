


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



