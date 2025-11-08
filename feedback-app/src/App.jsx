import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Training Program Feedback Tool
      </h1>
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
};

export default App;