import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import SectionTitle from '../section-title';
import CommentList from './comment-list';
import CommentForm from './comment-form';
import Modal from '../modal';
import { validateCommentForm } from '../../utils/validateForm';

export default function Comments() {
  const { videoId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [comment, setComment] = useState({
    username: '',
    content: '',
  });

  useEffect(() => {
    getComments(videoId);
  }, [videoId]);

  const getComments = async (videoId) => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.get(
        `/api/videos/${videoId}/comments`
      );
      const { data } = response.data;

      setComments(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const body = {
      username: comment.username.trim(),
      content: comment.content,
    };
    const { isValid, errors } = validateCommentForm(body);
    setErrors(errors);
    if (!isValid) {
      return;
    }

    try {
      const response = await axiosInstance.post(
        `/api/videos/${videoId}/comments`,
        body
      );
      const { data } = response.data;

      setComments((prevComments) => [...prevComments, data]);
      setComment({ ...comment, username: '', content: '' });
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  return (
    <>
      <div>
        {isLoading ? (
          <span className="loading loading-ring loading-lg hidden lg:block mx-auto my-14"></span>
        ) : (
          <>
            <SectionTitle
              title={`Comments (${comments.length})`}
              className="px-4 mt-6 mb-2 lg:my-4"
            />
            <CommentList
              comments={comments}
              className="hidden lg:flex flex-col gap-4"
            />
          </>
        )}
      </div>
      <CommentForm
        comment={comment}
        errors={errors}
        handleComment={handleComment}
        handleInputChange={handleInputChange}
        isSubmitting={isSubmitting}
        className="bg-gray-950 hidden lg:block"
      />
      {isLoading ? (
        <span className="loading loading-ring loading-lg block lg:hidden mx-auto my-14"></span>
      ) : (
        <div className="block lg:hidden bg-gray-950 px-4 py-1.5">
          <button
            onClick={() => window.commentModal.showModal()}
            className="inline-block font-bold w-full px-3 py-2 rounded-full cursor-pointer text-sm bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-600 text-slate-50 transition-all"
          >
            See All Comments
          </button>
          <Modal id="commentModal" title={`Comments (${comments.length})`}>
            <CommentList
              comments={comments}
              className="flex flex-col gap-4 h-72"
            />
            <CommentForm
              comment={comment}
              errors={errors}
              handleComment={handleComment}
              handleInputChange={handleInputChange}
              isSubmitting={isSubmitting}
            />
          </Modal>
        </div>
      )}
    </>
  );
}
