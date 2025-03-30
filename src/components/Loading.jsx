import React from 'react'
import loader from '/loading.gif'

const Loading = () => {
  return (
    <div className="flex justify-center w-screen h-screen items-center bg-[#000011]">
      <img src={loader} alt="loading" className="w-100 " />
    </div>
  );
};

export default Loading
