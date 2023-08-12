import React from 'react';

function TurnIndicator({ turn, opponent }) {
  let localTurn;
  React.useEffect(() => {
    if (opponent) {
      localTurn = !turn;
    }
  }, [turn]);

  return (
    <div className={`absolute top-40 ${opponent ? 'md:left-36 left-4' : 'md:right-36 right-4'}`}>
      <h3 className={`md:text-2xl text-lg border-2 border-white rounded-full bg-slate-800 p-5
            text-center ${localTurn && 'animate-bounce'}
            shadow-lg shadow-blue-600 md:h-20 h-16 md:w-20 w-16`}
      >
        {opponent ? 'O' : 'X'}
      </h3>
    </div>
  );
}

export default TurnIndicator;
