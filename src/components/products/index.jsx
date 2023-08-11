import PropTypes from 'prop-types';
import SectionTitle from '../section-title';
import ProductCarousel from './product-carousel';
import ProductList from './product-list';

export default function Products({ products }) {
  return (
    <>
      <SectionTitle title="Products" className="px-4 mt-6 mb-2 lg:my-4" />
      <ProductCarousel products={products} />
      <ProductList products={products} />
    </>
  );
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
};
