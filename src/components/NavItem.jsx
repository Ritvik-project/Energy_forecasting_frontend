import { useState } from "react";

const NavItem = ({ message }) => {
  const [selected, setStated] = useState(true);
  return (
    <div
      className={`${
        selected ? "bg-black text-white " : "bg-white text-black"
      } px-3 py-2 border-1 border-gray-600 rounded-lg`}
      onClick={() => setStated(!selected)}
    >
      <p>{message}</p>
    </div>
  );
};

export default NavItem;
