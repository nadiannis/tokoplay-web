import PropTypes from 'prop-types';

export default function CommentForm({ className = '' }) {
  return (
    <form
      className={`w-full p-0 sm:p-4 sm:pt-0 sticky bottom-0 z-50 ${className}`}
    >
      <div className="mt-4">
        <input
          type="text"
          name="username"
          placeholder="Enter a username"
          className="block p-2.5 w-full border-none bg-white bg-opacity-10 text-slate-50 text-sm rounded-lg"
        />
        <span className="text-red-400 mt-2"></span>
      </div>
      <div className="mt-4">
        <textarea
          name="content"
          placeholder="Write a comment"
          rows="3"
          className="block p-2.5 w-full border-none bg-white bg-opacity-10 text-slate-50 text-sm rounded-lg"
        ></textarea>
        <span className="text-red-400 mt-2"></span>
      </div>
      <button className="inline-block font-bold w-full px-3 py-2 rounded-full cursor-pointer mt-4 text-sm bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-600 text-slate-50 transition-all">
        Comment
      </button>
    </form>
  );
}

CommentForm.propTypes = {
  className: PropTypes.string,
};
