// src/app/(main)/layout.tsx

import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}