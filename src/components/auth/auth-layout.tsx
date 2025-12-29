// src/components/auth/auth-layout.tsx
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className='flex items-center justify-center w-full'>
        <Image
          src={"/assets/images/logo.png"}
          width={160}
          height={80}
          alt='Main Logo'
        ></Image>
      </div>
      <main className="flex-1 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            Copyright {new Date().getFullYear()} ・ ToletX, All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}