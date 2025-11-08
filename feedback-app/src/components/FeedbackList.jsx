import React from 'react';
import { useSelector } from 'react-redux';

const FeedbackList = () => {
  const feedbackEntries = useSelector((state) => state.feedback.entries);

  return (
    <div className="max-w-md mx-auto mt-6">
      <h3 className="text-xl font-semibold mb-3 text-center">All Feedback</h3>
      {feedbackEntries.length === 0 ? (
        <p className="text-center text-gray-500">No feedback submitted yet.</p>
      ) : (
        <ul className="space-y-3">
          {feedbackEntries.map((entry) => (
            <li
              key={entry.id}
              className="border p-3 rounded-lg shadow-sm bg-gray-50"
            >
              <p className="font-semibold">Rating: ⭐️ {entry.rating}</p>
              {entry.comment && (
                <p className="text-gray-700 mt-1">Comment: {entry.comment}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;