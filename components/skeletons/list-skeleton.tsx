import React from "react";

const ListSkeleton = () => {
  const numberOfCards = 2;

  return (
    <ul className="grid grid-cols-[repeat(auto-fill,_minmax(17rem,_1fr))] gap-6">
      {Array.from({ length: numberOfCards }, (_, index) => (
        <li
          key={index}
          className="clip relative aspect-[308/390] animate-pulse overflow-hidden bg-[#222528]"
        ></li>
      ))}
    </ul>
  );
};

export default ListSkeleton;
