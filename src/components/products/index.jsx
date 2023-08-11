import SectionTitle from '../section-title';
import ProductCarousel from './product-carousel';
import ProductList from './product-list';

export default function Products() {
  return (
    <>
      <SectionTitle title="Products" className="px-4 mt-6 mb-2 lg:my-4" />
      <ProductCarousel />
      <ProductList />
    </>
  );
}
