import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

function ButtonCopyId({ id }) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleButtonClick = () => {
    // copy id to clipboard
    // toast clipboard copied
  };
  return (
    buttonClicked ? (
      <div className="m-5 bg-sky-800 text-white text-xl
        shadow-xl shadow-blue-800 h-16 w-56 md:w-30 font-bold p-3
       border-t-4 border-slate-500 hover:border-blue-500 rounded flex gap-1"
      >
        <input
          type="text"
          placeholder="Your ID"
          value={id}
          disabled
          className="text-lg font-medium text-slate-900 dark:text-slate-200 bg-inherit border-b-2 rounded-md h-10 w-40 p-2 text-center"
        />
        <DocumentDuplicateIcon
          className="text-white shadow h-10 bg-inherit hover:bg-sky-700 hover:shadow-white"
          onClick={() => handleButtonClick()}
        />
      </div>
    ) : (
      <div
        aria-hidden="true"
        className="m-5 bg-sky-900 hover:bg-sky-800 text-white text-center text-xl
            shadow-xl shadow-blue-800 h-16 w-56 md:w-30 font-bold p-4 px-6
            border-t-4 border-slate-500 hover:border-blue-500 rounded"
        onClick={() => {
          handleButtonClick();
          setButtonClicked(true);
        }}
      >
        Copy ID
      </div>
    )
  );
}

export default ButtonCopyId;
