declare module 'react-double-marquee' {
    import React from 'react';
  
    interface MarqueeProps {
      direction?: 'left' | 'right';
      speed?: number;
      delay?: number;
      children: React.ReactNode; // Додайте children
    }
  
    const Marquee: React.FC<MarqueeProps>;
    export default Marquee;
  }