import SectionTitle from '../section-title';
import CommentList from './comment-list';
import CommentForm from './comment-form';
import Modal from '../modal';

export default function Comments() {
  return (
    <>
      <div>
        <SectionTitle
          title="Comments (130)"
          className="px-4 mt-6 mb-2 lg:my-4"
        />
        <CommentList className="hidden lg:flex flex-col gap-4" />
      </div>
      <CommentForm className="bg-gray-950 hidden lg:block" />
      <div className="block lg:hidden bg-gray-950 px-4 py-1.5">
        <button
          onClick={() => window.commentModal.showModal()}
          className="inline-block font-bold w-full px-3 py-2 rounded-full cursor-pointer text-sm bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-600 text-slate-50 transition-all"
        >
          See All Comments
        </button>
        <Modal id="commentModal" title="Comments (130)">
          <CommentList className="flex flex-col gap-4 h-72" />
          <CommentForm />
        </Modal>
      </div>
    </>
  );
}
