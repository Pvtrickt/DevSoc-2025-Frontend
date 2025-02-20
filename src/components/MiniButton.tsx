interface MiniButton {
  icon: string;
  bgColor?: string;
}

const MiniButton = ({ icon, bgColor }: MiniButton) => {
  return (
    // template for mini btns
    <button
      type="button"
      className={`border-1 rounded-sm h-[5vh] w-[5vh]  border-amber-600 ${bgColor} flex items-center justify-center 2xl:h-[4vh] 2xl:w-[4vh]`}
    >
      <img src={icon} className="h-[3vh] w-[3vh] 2xl:h-[2vh] 2xl:w-[2vh]" />
    </button>
  );
};

export default MiniButton;
