import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFeedback } from '../features/feedbackslice';

const FeedbackForm = () => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating) {
      setError('Please select a rating before submitting.');
      return;
    }

    dispatch(addFeedback({ rating, comment, id: Date.now() }));
    setRating('');
    setComment('');
    setError('');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-2xl mt-6">
      <h2 className="text-2xl font-semibold text-center mb-4">Session Feedback</h2>
      {error && <p className="text-red-500 text-center mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Rating */}
        <div>
          <label className="block mb-1 font-medium">Rating (1-5)</label>
          <select
            className="w-full border p-2 rounded-md"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">Select Rating</option>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        {/* Comment */}
        <div>
          <label className="block mb-1 font-medium">Comments (Optional)</label>
          <textarea
            className="w-full border p-2 rounded-md"
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;