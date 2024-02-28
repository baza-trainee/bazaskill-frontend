import ArrowIcon from '@/components/icons/ArrowIcon';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

interface SideBarItemProps {
  href: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  iconClassName?: string;
  className: string;
}

export const SideBarItem: React.FC<SideBarItemProps> = ({
  href,
  children,
  icon,
  iconClassName = '',
  className = '',
}) => {
  const [isHovered, setIsHovered] =
    useState<boolean>(false);

  return (
    <Link className="flex" href={href}>
      <li
        className={`flex h-16 w-[287px] flex-1 cursor-pointer items-center gap-3 border-t border-gray pl-[32px] ${
          isHovered
            ? 'hover:border-white hover:bg-white hover:text-black'
            : ''
        } ${className} `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {icon &&
          React.cloneElement(icon as React.ReactElement, {
            className: `${iconClassName} ${isHovered ? 'hover:text-black' : ''}`,
          })}
        {children}
        <div className="ml-auto p-3">
          {isHovered && (
            <ArrowIcon className="flex -rotate-90 transform items-center pr-2" />
          )}
        </div>
      </li>
    </Link>
  );
};
