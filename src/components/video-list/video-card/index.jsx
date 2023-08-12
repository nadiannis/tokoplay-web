import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const fallbackImageUrl =
  'https://images.unsplash.com/photo-1690921349852-7694d2b2c447?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';

export default function VideoCard({ video }) {
  const { _id, title, thumbnailUrl } = video;

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-1 md:px-2 mb-2 md:mb-4">
      <Link
        to={`/videos/${_id}`}
        className="block relative bg-gray-800 cursor-pointer rounded-lg"
      >
        <div className="thumbnail">
          <img
            src={thumbnailUrl || fallbackImageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full h-3/6 absolute bottom-0 flex content-end flex-wrap bg-thumbnail-text">
          <div className="text-slate-50 p-2.5 sm:p-3.5">
            <h2 className="text-xs sm:text-sm lg:text-base font-medium">
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

VideoCard.propTypes = {
  video: PropTypes.object.isRequired,
};
