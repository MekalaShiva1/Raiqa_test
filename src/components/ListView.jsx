import React from "react";

const ListView = ({ items,   }) => {
  if (items.length === 0) {
    return <p className=" mt-4">No numbers added yet</p>;
  }
 
  const highest = Math.max(...items);
  const lowest = Math.min(...items); 
    const reset = () => setCount(0);


  return (
   
    <div className="mt-6 w-full max-w-sm p-4 border rounded-md shadow-md ml-0">

      <div className="flex justify-between mb-2">
     
        <h1> added Numbers </h1>
      </div>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li
            key={index}
            className={`p-2 rounded ${
              item === highest
                ? "bg-green-200"
                : item === lowest
                ? "bg-red-200"
                : "bg-gray-100"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div> 



  );
};

export default ListView;

