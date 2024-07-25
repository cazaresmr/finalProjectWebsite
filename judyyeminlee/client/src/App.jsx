// src/App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Work from "./components/Work";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  const [products, setProducts] = useState([
    {
      name: "Handcrafted Necklace",
      price: 29.99,
      image_url: "https://example.com/images/necklace.jpg",
    },
    {
      name: "Artistic Painting",
      price: 99.99,
      image_url: "https://example.com/images/painting.jpg",
    },
    {
      name: "Custom Mug",
      price: 15.99,
      image_url: "https://example.com/images/mug.jpg",
    },
  ]);

  useEffect(() => {
    // Uncomment the axios call when the database is ready
    /*
    axios
      .get('http://localhost:5000/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('There was an error!', error));
    */
  }, []);

  return (
    <Router>
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link className='navbar-brand' to='/'>
            Judy&apos;s Art Store
          </Link>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/work'>
                  Work
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/shop'>
                  Shop
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/contact'>
                  Let&apos;s Talk
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/faq'>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className='container mt-3'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/work' element={<Work />} />
            <Route path='/shop' element={<Shop products={products} />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/faq' element={<FAQ />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
