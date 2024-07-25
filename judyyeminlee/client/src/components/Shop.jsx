// src/components/Shop.jsx
import PropTypes from "prop-types";

const Shop = ({ products }) => {
  return (
    <div>
      <h1>Shop</h1>
      <div className='row'>
        {products.map((product, index) => (
          <div key={index} className='col-md-4'>
            <div className='card mb-4'>
              <img
                src={product.image_url}
                className='card-img-top'
                alt={product.name}
              />
              <div className='card-body'>
                <h5 className='card-title'>{product.name}</h5>
                <p className='card-text'>${product.price}</p>
                <button className='btn btn-primary'>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Shop.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image_url: PropTypes.string,
    })
  ).isRequired,
};

export default Shop;
