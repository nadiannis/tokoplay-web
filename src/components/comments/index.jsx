import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { validateCommentForm } from '../../utils/validateForm';
import axiosInstance from '../../utils/axiosInstance';
import mergeArraysWithoutDuplicates from '../../utils/mergeArraysWithoutDuplicates';
import SectionTitle from '../section-title';
import CommentList from './comment-list';
import CommentForm from './comment-form';
import Modal from '../modal';

export default function Comments() {
  const { videoId } = useParams();

  const [isLoading, setisLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [totalComments, setTotalComments] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
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
    setisLoading(true);

    try {
      const response = await axiosInstance.get(
        `/api/videos/${videoId}/comments?sort=recent&page=${page}`
      );
      const data = response.data;

      setComments(data.data);
      setTotalComments(data.count);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  const fetchMoreComments = async (videoId, page) => {
    try {
      const response = await axiosInstance.get(
        `/api/videos/${videoId}/comments?sort=recent&page=${page}`
      );
      const data = response.data;

      const newComments = mergeArraysWithoutDuplicates(comments, data.data);
      setComments(newComments);
      setTotalComments(data.count);
      setPage(page);
      setHasMore(page < data.totalPages);
    } catch (error) {
      console.log(error);
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
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axiosInstance.post(
        `/api/videos/${videoId}/comments`,
        body
      );
      const { data } = response.data;

      setComments((prevComments) => [data, ...prevComments]);
      setTotalComments((prevTotalComments) => prevTotalComments + 1);
      setComment({ username: '', content: '' });
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

  console.log(page, hasMore, comments.length);

  return (
    <>
      <div>
        <SectionTitle
          title={`Comments (${totalComments})`}
          className="px-4 mt-6 mb-2 lg:my-4"
        />
        {isLoading && (
          <span className="loading loading-ring loading-lg hidden lg:block mx-auto my-14"></span>
        )}
        {!isLoading && comments.length === 0 && (
          <span className="text-sm text-center font-bold py-12 hidden lg:block">
            There are no comments available
          </span>
        )}
        {!isLoading && comments.length > 0 && (
          <CommentList
            comments={comments}
            hasMore={hasMore}
            fetchMore={() => fetchMoreComments(videoId, page + 1)}
            className="hidden lg:flex"
          />
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

      <div className="block lg:hidden bg-gray-950 px-4 py-1.5">
        <button
          onClick={() => window.commentModal.showModal()}
          className="inline-block font-bold w-full px-3 py-2 rounded-full cursor-pointer text-sm bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-600 text-slate-50 transition-all"
        >
          See All Comments
        </button>
        <Modal id="commentModal" title={`Comments (${totalComments})`}>
          {isLoading && (
            <span className="loading loading-ring loading-lg block lg:hidden mx-auto my-14"></span>
          )}
          {!isLoading && comments.length === 0 && (
            <span className="block text-sm text-center font-bold py-12">
              There are no comments available
            </span>
          )}
          {!isLoading && comments.length > 0 && (
            <CommentList
              comments={comments}
              hasMore={hasMore}
              fetchMore={() => fetchMoreComments(videoId, page + 1)}
              className="flex"
            />
          )}
          <CommentForm
            comment={comment}
            errors={errors}
            handleComment={handleComment}
            handleInputChange={handleInputChange}
            isSubmitting={isSubmitting}
          />
        </Modal>
      </div>
    </>
  );
}
