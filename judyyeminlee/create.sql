CREATE DATABASE artist_merch_store;
USE artist_merch_store;
CREATE TABLE products (
    id INT AUTO_INCREMENT,
    name VARCHAR(255),
    price DECIMAL(10, 2),
    PRIMARY KEY (id)
);
