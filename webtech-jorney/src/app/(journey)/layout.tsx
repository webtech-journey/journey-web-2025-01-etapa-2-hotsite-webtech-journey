// src/app/(journey)/layout.tsx


// COMPONENTS
import { Header } from '../../components/header';
import { Container } from '../../components/container';
import { Footer } from '../../components/footer';


export default function JourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  );
}