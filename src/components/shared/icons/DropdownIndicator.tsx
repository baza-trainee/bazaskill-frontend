interface DropdownIndicatorProps {
  isOpen: boolean;
}

const DropdownIndicator: React.FC<
  DropdownIndicatorProps
> = ({ isOpen }) => (
  <div>
    {isOpen
      ? (
          <svg className="fill-black" width={32} height={32}>
            <use href="/Icons/sprite.svg#icon-select_open"></use>
          </svg>
        )
      : (
          <svg className="fill-black" width={32} height={32}>
            <use href="/Icons/sprite.svg#icon-select_close"></use>
          </svg>
        )}
  </div>
);

export default DropdownIndicator;
