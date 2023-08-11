import PropTypes from 'prop-types';
import Product from '../product';

export default function ProductCarousel({ products }) {
  return (
    <div className="block 2xl:hidden px-4">
      {products.length === 0 && (
        <span className="block text-sm text-center font-bold py-4">
          There are no products available
        </span>
      )}
      <div className="carousel space-x-3 rounded-lg w-full">
        {products.length > 0 &&
          products.map((product) => (
            <div className="carousel-item" key={product._id}>
              <Product product={product} />
            </div>
          ))}
      </div>
    </div>
  );
}

ProductCarousel.propTypes = {
  products: PropTypes.array.isRequired,
};
