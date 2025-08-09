

import React from "react";

const SideBar = ({ setFilterType ,onResetList  }) => {
  return (
    <div className="flex flex-col gap-3 bg-gray-100 p-4 border-r w-48">

      <button
        onClick={() => setFilterType("increment")}
        className="px-3 py-2 bg-green-300 rounded"
      >
        OrderList
      </button>
      <button
        onClick={() => setFilterType("decrement")}
        className="px-3 py-2 bg-red-300 rounded"
      >
        UnordderList
      </button>
      <button
        onClick={() => setFilterType(null)}
        className="px-3 py-2 bg-gray-300 rounded"
      >
        Selectwise
      </button>
    </div>
  );
};

export default SideBar;

