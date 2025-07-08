import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import imgLogo from '../../../public/img/logo.png';
import imgMenu from '../../../public/img/menu_fig.png';

export function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <div className={`${styles.header__logo} animate__animated animate__fadeIn`}>
          <Link href="https://webtech.network/">
            <Image src={imgLogo} alt="Logo Webctech Journey" width={200} height={50} />
          </Link>
        </div>
        <div className={`${styles.header__navs} animate__animated animate__fadeIn`}>
          <ul>
            <li><a href="https://webtech.network/about">Sobre</a></li>
            <li><a href="https://webtech.network/labs">Labs</a></li>
            <li><a href="https://webtech.network/events">Eventos</a></li>
            <li><a href="https://webtech.network/journey">Journey</a></li>
            <li><a href="https://webtech.network/team">Equipe</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
        <div className={`${styles.header__menu} animate__animated animate__fadeIn`}>
          <Image src={imgMenu} alt="Menu" width={80} height={40} />
        </div>
      </nav>
    </header>
  );
}