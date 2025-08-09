


import React, { useState } from "react";

const Counter = ({ onAdd }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const handleAdd = () => {
    if (count > 0) {
      onAdd(count);
      setCount(0);
    }
  };

  return (
    <div className="bg-yellow-300 w-full max-w-sm sm:max-w-md p-4 rounded border mx-auto">
      <h1 className="text-2xl sm:text-3xl text-center mb-4 font-bold">
        {count}
      </h1>
      <div className="flex flex-col sm:flex-row gap-2 justify-center">
        <button
          onClick={decrement}
          className="px-4 py-2 bg-red-500 text-white rounded w-full sm:w-auto"
        >
          Decrement
        </button>
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded w-full sm:w-auto"
        >
          Increment
        </button>
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded w-full sm:w-auto"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Counter;
