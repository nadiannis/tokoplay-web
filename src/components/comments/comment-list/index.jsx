import PropTypes from 'prop-types';
import Comment from '../comment';

export default function CommentList({ comments, className = '' }) {
  return (
    <div
      className={`overflow-x-hidden overflow-y-auto pb-6 ${className}`}
      style={{ minHeight: '18rem', maxHeight: 'calc(100vh - 340px)' }}
    >
      {comments.length > 0 &&
        comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  className: PropTypes.string,
};
