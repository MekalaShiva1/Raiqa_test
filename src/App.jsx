


import React, { useState } from "react";
import Counter from "./components/Counter";
import ListView from "./components/ListView";
import TopBar from "./components/Topbar";
import SideBar from "./components/Sidebar";

const App = () => {
  const [list, setList] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterType, setFilterType] = useState(null); 




  const handleAdd = (value) => {
    if (!list.includes(value)) {
      setList([...list, value]);
    }
  };

  const handleSort = () => {
    const sorted = [...list].sort((a, b) =>
      sortOrder === "asc" ? a - b : b - a
    );
    setList(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const resetList = () => {
    setList([]);
  };

  const handleDelete = (number) => {
    setList(list.filter((item) => item !== number));
  };

  const getFilteredList = () => {
    if (filterType === "increment") {
      return [...list].sort((a, b) => a - b);
    }
    if (filterType === "decrement") {
      return [...list].sort((a, b) => b - a);
    }
    return list;
  };

  return (
    <div className="h-screen flex flex-col">
      <TopBar />
      <div className="flex flex-1">
        <SideBar setFilterType={setFilterType} />
        <div className="flex-1 flex flex-col p-6 bg-gray-50 overflow-auto">
          <h1 className="text-3xl font-bold mb-4">Counter & List App</h1>
          <div className="mb-4">
            <Counter onAdd={handleAdd} />
          </div>
          <ListView
            items={getFilteredList()}
            onSort={handleSort}
            sortOrder={sortOrder}
            onResetList={resetList}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
