import Product from '../product';

export default function ProductList() {
  return (
    <div
      className="hidden 2xl:flex flex-col gap-4 px-2.5 pb-6 overflow-x-hidden overflow-y-auto"
      style={{ height: 'calc(100vh - 114px)' }}
    >
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}
