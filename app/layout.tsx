import SideBar, { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import 'styles/global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>{children}</body>
    </html>
  );
}
