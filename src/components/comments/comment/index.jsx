import PropTypes from 'prop-types';
import dayjs from 'dayjs/esm';
import relativeTime from 'dayjs/esm/plugin/relativeTime';

export default function Comment({ comment }) {
  const { username, content, createdAt } = comment;

  dayjs.extend(relativeTime);

  return (
    <div className="text-sm px-4">
      <div className="flex items-center gap-2 flex-wrap">
        <h3 className="font-bold">{username}</h3>
        <span className="text-xs text-shade-300">
          {dayjs(createdAt).fromNow()}
        </span>
      </div>
      <p className="mt-1">{content}</p>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};
