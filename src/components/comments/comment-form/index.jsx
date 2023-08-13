import PropTypes from 'prop-types';

export default function CommentForm({
  comment,
  errors,
  handleComment,
  handleInputChange,
  isSubmitting,
  className = '',
}) {
  return (
    <form
      onSubmit={handleComment}
      className={`w-full p-4 sm:pt-0 ${className}`}
    >
      <div className="mt-4">
        <input
          type="text"
          name="username"
          placeholder="Enter a username"
          value={comment.username}
          onChange={handleInputChange}
          className="block p-2.5 w-full border-none bg-white bg-opacity-10 text-slate-50 text-sm rounded-lg"
        />
        {errors.username && (
          <span className="text-red-400 text-sm mt-2">{errors.username}</span>
        )}
      </div>
      <div className="mt-4">
        <textarea
          name="content"
          placeholder="Write a comment"
          rows="3"
          value={comment.content}
          onChange={handleInputChange}
          className="block p-2.5 w-full border-none bg-white bg-opacity-10 text-slate-50 text-sm rounded-lg"
        ></textarea>
        {errors.content && (
          <span className="text-red-400 text-sm mt-2">{errors.content}</span>
        )}
      </div>
      <button
        className="inline-block font-bold w-full px-3 py-2 rounded-full cursor-pointer mt-4 text-sm bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-600 text-slate-50 transition-all"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="loading loading-ring loading-sm"></span>
        ) : (
          'Comment'
        )}
      </button>
    </form>
  );
}

CommentForm.propTypes = {
  comment: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleComment: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  className: PropTypes.string,
};
