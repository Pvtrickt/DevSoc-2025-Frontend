interface CardProps {
  name: string;
  building_picture: string;
  rooms_available: number;
}

const Card = ({ name, building_picture, rooms_available }: CardProps) => {
  return (
    <div>
      {/* displays room card for phone screens */}
      <div
        className=" cursor-pointer group sm:hidden relative flex xl:flex-col flex-row xl:h-[45vh] w-[41vh] bg-cover bg-center rounded-xl items-center justify-between p-3 2xl:h-[40vh] 2xl:w-[36vh]"
        style={{ backgroundImage: `url(${building_picture})` }}
      >
        <div className="absolute inset-0 bg-amber-600 opacity-0 transition-opacity z-10 group-hover:opacity-40 rounded-xl"></div>

        {/* black transparent layer */}
        <div className="sm:hidden absolute inset-0 bg-black opacity-20 z-10 rounded-xl"></div>

        {/* room name tag */}
        <div className=" h-[7vh] w-fit rounded-xl flex items-center flex-row 2xl:h-[6vh] sm:hidden">
          <span className="flex text-white font-bold z-20">{name}</span>
        </div>

        {/* rooms avaliable tag */}
        <div className="z-20 bg-white text-xs h-fit w-fit ml-auto rounded-2xl p-2 px-4 flex flex-row justify-center items-center gap-1">
          <img
            src="src/assets/greendot.png"
            alt="greenDot"
            className="h-[1vh]"
          />
          <span>
            {rooms_available} / {rooms_available}
          </span>
        </div>
      </div>

      {/* displays room cards for larger screens */}
      <div
        className="cursor-pointer group hidden relative sm:flex sm:flex-col flex-row sm:h-[20vh] sm:w-[35vh] xl:h-[45vh] xl:w-[41vh] bg-cover bg-center rounded-xl justify-between p-3 2xl:h-[40vh] 2xl:w-[36vh]"
        style={{ backgroundImage: `url(${building_picture})` }}
      >
        <div className="absolute inset-0 bg-amber-600 opacity-0 transition-opacity z-10 group-hover:opacity-40 rounded-xl"></div>

        {/* rooms avaliable tag */}
        <div className="bg-white text-xs h-fit w-fit ml-auto rounded-2xl p-3 px-4 flex flex-row justify-center items-center gap-1 z-20">
          <img
            src="src/assets/greendot.png"
            alt="greenDot"
            className="h-[1vh]"
          />
          <span className="">{rooms_available}</span>
          <span className="hidden sm:block">rooms avaliable</span>
          <span className=" sm:hidden">/ {rooms_available}</span>
        </div>

        {/* room name tag */}
        <div className=" bg-amber-600 h-[7vh] w-full rounded-xl sm:flex items-center flex-row p-5 2xl:h-[6vh] hidden z-20">
          <span className="flex text-white">{name}</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Card;
