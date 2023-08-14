import PropTypes from 'prop-types';

export default function SearchBar({ handleInputChange }) {
  return (
    <form className="w-full mt-4" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="What are you looking for?"
        className="bg-gray-900 border-none rounded-full text-sm w-full h-12 px-8 py-3 placeholder:text-gray-400 text-slate-50"
      />
    </form>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string,
  handleInputChange: PropTypes.func,
};
