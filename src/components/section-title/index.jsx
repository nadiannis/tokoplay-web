import PropTypes from 'prop-types';

export default function SectionTitle({ title, className = '' }) {
  return (
    <h2
      className={` text-shade-300 font-bold text-sm 2xl:text-base ${className}`}
    >
      {title}
    </h2>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};
