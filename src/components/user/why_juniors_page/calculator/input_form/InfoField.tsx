import { useState } from "react";
import { Item } from "./data";
import Popup from "../Popup";
import InfoIcon from "../icons/InfoIcon";

interface InfoProps {
  item: Item;
}

const InfoField: React.FC<InfoProps> = ({ item }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div
      className="grid grid-cols-1 grid-rows-1 items-center justify-items-end cursor-pointer"
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      <InfoIcon />
      {showPopup && (
        <Popup
          text={item.text}
          position={{ top: "40px", right: "16px", zIndex: "1" }}
        />
      )}
    </div>
  );
};

export default InfoField;

