interface PopupProps {
  text: string;
  position: Record<string, string>;
}

const Popup = ({ text, position }: PopupProps) => {
  return (
    <div
      className="absolute flex min-w-[232px] flex-col items-start 
        justify-start bg-white p-4 text-sm font-normal leading-6 text-black"
      style={{ ...position }}
    >
      {text}
    </div>
  );
};

export default Popup;
