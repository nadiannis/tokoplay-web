import PropTypes from 'prop-types';

export default function SearchBar({ handleInputChange }) {
  return (
    <form className="w-full mt-4" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="What are you looking for?"
        className="input w-full text-sm px-7 bg-gray-900 placeholder:text-gray-400 focus:border-white text-slate-50 rounded-full"
      />
    </form>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string,
  handleInputChange: PropTypes.func,
};
