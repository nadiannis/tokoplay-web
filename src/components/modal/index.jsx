import PropTypes from 'prop-types';
import SectionTitle from '../section-title';

export default function Modal({ id, title = 'Modal', children }) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box w-11/12 max-w-xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <SectionTitle title={title} className="mb-4" />
        {children}
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};
