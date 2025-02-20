import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="flex flex-col mt-[8vh]">
      {/* searchbar that only appears for small screen size screens */}
      <div className="flex sm:hidden flex-row border-2 rounded-md mx-4 h-[6vh] border-gray-300 items-center px-3 gap-3 mt-3">
        <img
          src="src/assets/magnifying-glass-backup-svgrepo-com.svg"
          className="h-[3vh] w-[3vh]"
        />
        {/* searchbar */}
        <input
          type="search"
          className="text-gray-400 w-full "
          placeholder="Search for a building..."
        />
      </div>

      {/* div that contains btns and searchbar */}
      <div className="h-[8vh] flex flex-row justify-between items-center px-4 xl:p-6 2xl:h-[6vh] w-full">
        <button className="rounded-xl border-2 border-amber-500 text-amber-500 h-[5vh] sm:w-[20vh]  w-[15vh] flex flex-row justify-center items-center gap-4">
          <img
            src="src/assets/filter-solid (2).svg"
            className="h-[2vh] w-[3vh]"
          />
          <span className="font-bold">Filters</span>
        </button>

        {/* searchbar that only appears for other screen size screens */}
        <div className="hidden sm:flex flex-row border-2 rounded-md xl:w-[85vh] h-[6vh]  border-gray-300 items-center px-3 gap-3 2xl:w-[95vh] 2xl:h-[5vh]">
          <img
            src="src/assets/magnifying-glass-backup-svgrepo-com.svg"
            className="h-[3vh] w-[3vh]"
          />
          <input
            type="search"
            className="text-gray-400 w-full "
            placeholder="Search for a building..."
          />
        </div>

        {/* filter btn */}
        <button className="rounded-xl border-2 border-amber-500 text-amber-500 h-[5vh] w-[15vh] sm:w-[20vh] flex flex-row justify-center items-center gap-4">
          <img
            src="src/assets/bars-filter-svgrepo-com.svg"
            className="h-[2vh] w-[3vh]"
          />
          <span className="font-bold">Sort</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
