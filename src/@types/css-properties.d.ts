import 'react';

declare module 'react' {
  interface CSSProperties {
    '--i'?: string | number;
  }
}
