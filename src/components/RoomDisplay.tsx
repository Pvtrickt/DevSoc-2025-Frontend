import React from "react";
import RoomCard from "./RoomCard.tsx";
import rooms from "./Rooms.tsx";

const RoomDisplay: React.FC = () => {
  return (
    <div className="h-fit flex justify-center pt-3">
      {/* grid to display room cards */}
      <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid gap-5 2xl:grid-cols-5">
        {/* maps thru rooms array and displays cards*/}
        {rooms.map((room, index) => (
          <RoomCard key={index} {...room} />
        ))}
      </div>
    </div>
  );
};

export default RoomDisplay;
