import PropTypes from 'prop-types';

export default function Container({ children, className = '' }) {
  return (
    <div className={`w-full max-w-screen-12xl mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
