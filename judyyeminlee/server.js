import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from "mysql2";

const app = express();
const port = 5555;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "artist_merch_store",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("MySQL connected...");
});

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Judy's Art Store API");
});

// Create table route (for testing)
app.get("/createTable", (req, res) => {
  const sql = `CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT,
        name VARCHAR(255),
        price DECIMAL(10, 2),
        PRIMARY KEY (id)
    )`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error creating table:", err);
      res.status(500).send("Error creating table");
      return;
    }
    res.send("Products table created");
  });
});

// CRUD routes
app.post("/products", (req, res) => {
  const { name, price } = req.body;
  const sql = `INSERT INTO products (name, price) VALUES (?, ?)`;
  db.query(sql, [name, price], (err, result) => {
    if (err) {
      console.error("Error adding product:", err);
      res.status(500).send("Error adding product");
      return;
    }
    res.send("Product added");
  });
});

app.get("/products", (req, res) => {
  const sql = "SELECT * FROM products";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      res.status(500).send("Error fetching products");
      return;
    }
    res.json(results);
  });
});

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const sql = "UPDATE products SET name = ?, price = ? WHERE id = ?";
  db.query(sql, [name, price, id], (err, result) => {
    if (err) {
      console.error("Error updating product:", err);
      res.status(500).send("Error updating product");
      return;
    }
    res.send("Product updated");
  });
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM products WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting product:", err);
      res.status(500).send("Error deleting product");
      return;
    }
    res.send("Product deleted");
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
