import type { HTMLProps } from 'react';

import React from 'react';

interface ContactsIconProps
  extends HTMLProps<HTMLDivElement> {}
const ContactsIcon: React.FC<ContactsIconProps> = ({
  className,
  ...rest
}) => {
  return (
    <div className={`${className}`} {...rest}>
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 0V20H0V0H4ZM6 0H16.0049C17.1068 0 18 0.89821 18 1.9908V18.0092C18 19.1087 17.1074 20 16.0049 20H6V0ZM19 4H21V8H19V4ZM19 10H21V14H19V10ZM12 10C13.1046 10 14 9.1046 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.1046 10.8954 10 12 10ZM9 14H15C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default ContactsIcon;
