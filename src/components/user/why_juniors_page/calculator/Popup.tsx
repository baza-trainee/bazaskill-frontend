interface PopupProps {
  text: string;
  position: Record<string, string>;
}

const Popup = ({ text, position }: PopupProps) => {
  return (
    <div
      className="absolute bg-white text-black text-sm font-normal 
        leading-6 min-w-[232px] flex flex-col justify-start items-start p-4"
      style={{ ...position }}
    >
      {text}
    </div>
  );
};

export default Popup;