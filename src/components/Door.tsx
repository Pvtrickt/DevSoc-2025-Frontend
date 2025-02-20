import React from "react";
import { useState } from "react";

const Door: React.FC = () => {
  const [isClicked, setIsClicked] = useState(true);

  // a handleClick func to change state of door
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="h-[6vh]">
      <button onClick={handleClick}>
        <img
        // if clicked is true, img is opened door
        // if clicked state is false, door is closed
          src={
            isClicked
              ? "src/assets/freeRoomsLogo.png"
              : "src/assets/freeroomsDoorClosed.png"
          }
          className="h-[7vh] 2xl:h-[5vh]"
        />
      </button>
    </div>
  );
};

export default Door;
