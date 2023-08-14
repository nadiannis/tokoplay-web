import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Comment from '../comment';

export default function CommentList({
  comments,
  hasMore = false,
  fetchMore = () => {},
  className = '',
}) {
  return (
    <div
      id="commentList"
      className={`comment-list-height overflow-x-hidden overflow-y-auto rounded-lg pb-16 lg:pb-24 shadow-inner shadow-black flex flex-col-reverse ${className}`}
    >
      <InfiniteScroll
        scrollableTarget="commentList"
        className="flex flex-col-reverse gap-4"
        inverse={true}
        dataLength={comments.length}
        hasMore={hasMore}
        next={fetchMore}
        useWindow={false}
        loader={
          <span className="loading loading-ring loading-lg hidden lg:block mx-auto my-14 rounded-lg"></span>
        }
      >
        {comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </InfiniteScroll>
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  hasMore: PropTypes.bool,
  fetchMore: PropTypes.func,
  className: PropTypes.string,
};
