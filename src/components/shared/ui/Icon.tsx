import type { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  name: string;
}

export const Icon = ({ name, ...props }: IconProps) => {
  return (
    <svg {...props}>
      <use href={`/Icons/sprite.svg#${name}`} />
    </svg>
  );
};
