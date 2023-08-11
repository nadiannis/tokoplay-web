import PropTypes from 'prop-types';
import Product from '../product';

export default function ProductList({ products }) {
  return (
    <div
      className="hidden 2xl:flex flex-col gap-4 px-4 pb-6 overflow-x-hidden overflow-y-auto"
      style={{ height: 'calc(100vh - 114px)' }}
    >
      {products.length === 0 && (
        <span className="block text-sm text-center font-bold py-4">
          There are no products available
        </span>
      )}
      {products.length > 0 &&
        products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};
