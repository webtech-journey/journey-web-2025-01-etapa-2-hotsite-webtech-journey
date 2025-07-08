import styles from './Container.module.css'
import { ReactNode } from 'react'; 

//interface para as props do  componente
interface ContainerProps {
  children: ReactNode;
}

// interface para props da função
export function Container({ children }: ContainerProps) {
  return (
    <section className={styles.container}>
      {children}
    </section>
  );
}