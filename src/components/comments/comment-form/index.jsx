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
          className={`input w-full bg-white bg-opacity-10 text-slate-50 focus:border-white text-sm rounded-full ${
            errors.username && 'input-error'
          }`}
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
          className={`textarea w-full p-2.5 bg-white bg-opacity-10 text-slate-50 focus:border-white text-sm rounded-2xl ${
            errors.content && 'textarea-error'
          }`}
        ></textarea>
        {errors.content && (
          <span className="text-red-400 text-sm mt-2">{errors.content}</span>
        )}
      </div>
      <button
        className="btn btn-active btn-primary btn-circle w-full mt-4"
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
