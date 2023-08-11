import PropTypes from 'prop-types';
import Comment from '../comment';

export default function CommentList({ className = '' }) {
  return (
    <div
      className={`overflow-x-hidden overflow-y-auto pb-6 ${className}`}
      style={{ minHeight: '18rem', maxHeight: 'calc(100vh - 340px)' }}
    >
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}

CommentList.propTypes = {
  className: PropTypes.string,
};
