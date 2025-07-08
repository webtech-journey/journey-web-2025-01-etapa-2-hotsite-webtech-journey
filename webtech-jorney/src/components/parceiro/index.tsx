import styles from './Parceiro.module.css';
import Image from 'next/image';
import imgPart from '../../../public/img/menu_fig.png';


export function Parceiro() {
  return (
    <div className={styles.parceiro}>
      <Image src={imgPart} alt="Partner" width={100} className={styles.outline} />
      <h4>Parceiro</h4>
    </div>
  );
}
