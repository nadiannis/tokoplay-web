import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const fallbackImageUrl =
  'https://images.unsplash.com/photo-1690921349852-7694d2b2c447?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80';

export default function VideoCard({ video }) {
  return (
    <div className="w-1/2 sm:w-1/3 lg:w-2/12 px-1 sm:px-2 mb-2 sm:mb-4">
      <Link
        to="/videos/1"
        className="block relative bg-gray-800 cursor-pointer rounded-lg"
      >
        <div className="w-full rounded-lg">
          <img
            src={video?.imageUrl || fallbackImageUrl}
            alt="video"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full h-3/6 absolute bottom-0 flex content-end flex-wrap bg-thumbnail-text">
          <div className="text-slate-50 p-3 sm:p-3.5">
            <h2 className="text-sm font-medium">
              Serbu Flash Sale Pempek Palembang Yuk
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

VideoCard.propTypes = {
  video: PropTypes.object,
};
