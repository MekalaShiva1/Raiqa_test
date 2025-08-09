



import React from "react";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between bg-purple-500 text-white px-6 py-3">
      <div className="font-bold text-lg">RAIQA</div>
      <div className="flex gap-6">
        <button>Home</button>
        <button>About</button>
        <button>Search</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default TopBar;
