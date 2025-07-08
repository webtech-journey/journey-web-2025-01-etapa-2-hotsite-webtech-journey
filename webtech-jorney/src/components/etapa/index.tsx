import styles from './Etapa.module.css';
import Image from 'next/image';
import imgReact from '../../../public/img/react.svg';

// Uma interface para as props do componente é definida.
interface EtapaProps {
  etapa: number;
}

// A interface é aplicada às props da função.
export function Etapa({ etapa }: EtapaProps) {
  return (
    <div className={styles.cardsContainer} key={etapa}>
      {/* Left Card */}
      <div className={`${styles.card} ${styles.leftCard}`}>
        <div className={styles.logoContainer}>
          <Image src={imgReact} alt="React Logo" className={styles.reactLogo} />
          <div className={styles.logoText}>
            <h1>React</h1>
            <h2>Introdução</h2>
          </div>
        </div>
        <div className={styles.etapaTag}>
          <span>Etapa - {etapa}</span>
        </div>
        <div className={styles.progressContainer}>
          <div className={styles.progressLabel}></div>
          <div className={styles.progressBar}>
            <div className={styles.progressFill}></div>
            <div className={styles.textFillStart}>
              <span className="icon-chart-column-big"></span>Facil
            </div>
            <div className={styles.textFillEnd}>
              {etapa === 1 ? "35%" : <span className="icon-lock"></span>}
            </div>
          </div>
        </div>
      </div>

      {/* Middle Card */}
      <div className={`${styles.card} ${styles.rightCard}`}>
        <div className={styles.cardContent}>
          <p>
            É criado um site web simples usando HTML para estrutura e CSS
            para estilização que contenha múltiplas páginas interligadas,
            como uma página inicial, uma página Sobre, dados dos produtos
            ou serviços e uma página de contato.
          </p>
        </div>
      </div>

      {/* Right Card */}
      <div className={`${styles.card} ${styles.noteCard}`}>
        <div className={styles.cardContent}>
          <h3>Nota</h3>
          <div className={styles.grade}>-</div>
        </div>
      </div>
    </div>
  );
}