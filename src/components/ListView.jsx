

import React, { useState } from "react";

const ListView = ({ items, onDelete }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  if (items.length === 0) {
    return <p className="mt-4 text-center">No numbers added yet</p>;
  }

  const highest = Math.max(...items);
  const lowest = Math.min(...items);

  const confirmDelete = (item) => {
    setSelectedItem(item);
    setShowDialog(true);
  };

  const handleDelete = () => {
    onDelete(selectedItem);
    setShowDialog(false);
    setSelectedItem(null);
  };

  return (
    <div className="mt-6 w-full max-w-sm sm:max-w-md p-4 border rounded-md shadow-md">
      <div className="flex justify-between mb-2">
        <h1 className="text-lg font-semibold">Added Numbers</h1>
      </div>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li
            key={index}
            className={`p-2 flex justify-between items-center rounded text-sm sm:text-base ${
              item === highest
                ? "bg-green-200"
                : item === lowest
                ? "bg-red-200"
                : "bg-gray-100"
            }`}
          >
            <span>{item}</span>
            <button
              onClick={() => confirmDelete(item)}
              className="text-red-500 font-bold hover:text-red-700 text-sm sm:text-base"
            >
              Delete
            </button>
          </li>
        ))}

        {showDialog && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 p-4 sm:p-0 transition-opacity duration-300">
            <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-xs sm:max-w-md relative transform transition-all duration-300">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                Are you sure you want to delete?
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mb-6">
                This action cannot be undone. The selected item will be
                permanently removed.
              </p>

              <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                <button
                  onClick={() => setShowDialog(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition w-full sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition w-full sm:w-auto"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default ListView;
