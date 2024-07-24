import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("There was an error!", error));
  }, []);

  const addProduct = () => {
    axios
      .post("http://localhost:5000/products", { name, price })
      .then(() => {
        setProducts([...products, { name, price }]);
        setName("");
        setPrice("");
      })
      .catch((error) => console.error("There was an error!", error));
  };

  return (
    <div className='container'>
      <h1 className='my-4'>judy yemin lee</h1>
      <div className='mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Product Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          className='form-control'
          placeholder='Product Price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className='btn btn-primary mt-2' onClick={addProduct}>
          Add Product
        </button>
      </div>
      <div className='row'>
        {products.map((product, index) => (
          <div key={index} className='col-md-4'>
            <div className='card mb-4'>
              <div className='card-body'>
                <h5 className='card-title'>{product.name}</h5>
                <p className='card-text'>${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
