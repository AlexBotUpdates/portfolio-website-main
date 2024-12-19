import React from 'react';
import Loader from './ui/Loader';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#171d32]">
      <Loader />
    </div>
  );
};

export default LoadingPage;
