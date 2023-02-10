import Image from 'next/image';
import { Inter } from '@next/font/google';
import NavbarSection from '@/components/NavbarSection';
import HeaderSection from '@/components/HomeSection/HeaderSection';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <NavbarSection />
      <div className="max-w-6xl mx-auto">
        <HeaderSection />
      </div>
    </main>
  );
}
