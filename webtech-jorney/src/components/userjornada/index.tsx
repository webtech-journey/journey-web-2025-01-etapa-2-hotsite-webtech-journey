import styles from './UserJornada.module.css'

export function UserJornada() {
    return (
        <div className={styles.user}>
            <div className={styles.header}>
                <img src="../assets/img/menu_fig.png" alt="" />
                <h4>Pessoa da silva</h4>
            </div>
            <h4>Aluno</h4>
            <h4>Grupo 2</h4>
            <h4>Etapa 5</h4>
        </div>
    )
}
