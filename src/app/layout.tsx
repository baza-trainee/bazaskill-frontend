import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ReduxProvider from '@/components/providers/ReduxProvider';
import LayoutProvider from '@/components/providers/LayoutProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BazaSkill',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={inter.className}>
          <LayoutProvider>{children}</LayoutProvider>
        </body>
      </html>
    </ReduxProvider>
  );
}



// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import ReduxProvider from '@/components/providers/ReduxProvider';
// import LayoutProvider from '@/components/providers/LayoutProvider';
// import './globals.css';
// import { wrapper } from '@/redux/store';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'BazaSkill',
//   description: 'Generated by create next app',
// };

// const RootLayout =({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   return (
//     <ReduxProvider>
//       <html lang="en">
//         <body className={inter.className}>
//           <LayoutProvider>{children}</LayoutProvider>
//         </body>
//       </html>
//     </ReduxProvider>
//   );
// }

// export default wrapper.withRedux(RootLayout)