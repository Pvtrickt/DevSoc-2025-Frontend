import React from "react";
import MiniButton from "./MiniButton";
import Door from "./Door";
import miniBtnIcons from "./MiniBtnIcons";

const Header: React.FC = () => {
  return (
    <div className=" z-[9999] h-[8vh] flex flex-row justify-between px-4 border-b-1 border-gray-200 fixed top-0 left-0 bg-white w-full items-center 2xl:h-[7vh]">
      <div className="flex flex-row w-auto h-auto items-center">
        {/* door icon */}
        <Door />
        <span className="text-orange-400 text-3xl tracking-wider hidden sm:block">
          Freerooms
        </span>
      </div>

      {/* buttons */}
      <div className="flex flex-row gap-2">
        {/* maps through an array of btns */}
        {miniBtnIcons.map((btnIcon, index) => (
          <MiniButton key={index} {...btnIcon} />
        ))}
      </div>
    </div>
  );
};

export default Header;
