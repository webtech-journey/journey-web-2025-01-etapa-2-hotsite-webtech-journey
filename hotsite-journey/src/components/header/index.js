import styles from './Header.module.css'
import Link from 'next/link';


export function Header() {
    return (
        <header className={styles.header}>
            <Link href="https://webtech.network/">
                <img src="/logo_nome.svg" alt="logo_nome webtech" className={styles.logo_nome} />
            </Link>

            {/* /home/lipe/projetos/journey-web-2025-01-etapa-2-hotsite-webtech-journey/hotsite-journey/public/logo_nome.svg */}
            
            <div className={styles.paginacao}>
                <ul>
                    <li><Link href="https://webtech.network/about">Sobre</Link></li>
                    <li><Link href="https://webtech.network/labs">Labs</Link></li>
                    <li><Link href="https://webtech.network/events">Eventos</Link></li>
                    <li><Link href="https://webtech.network/journey">Journey</Link></li>
                    <li><Link href="https://webtech.network/team">Equipe</Link></li>
                    <li><Link href="#">Contato</Link></li>
                </ul>
            </div>
        </header>
    )
}
