import PropTypes from 'prop-types';

export default function Product({ product }) {
  const { title, price, pageUrl } = product;

  return (
    <a
      href={pageUrl}
      target="_blank"
      rel="noreferrer"
      className="p-4 flex flex-col 2xl:flex-row justify-between gap-2 bg-gray-900 hover:bg-gray-800 active:bg-gray-800 text-slate-50 rounded-lg cursor-pointer transition-all"
    >
      <span className="font-bold text-sm">{title}</span>
      <span className="text-shade-300 text-xs">Rp{price}</span>
    </a>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};
