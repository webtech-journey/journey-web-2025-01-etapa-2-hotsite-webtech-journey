import styles from './Container.module.css'

export function Container({ children }) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}
