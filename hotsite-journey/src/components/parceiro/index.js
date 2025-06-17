import styles from './Parceiro.module.css';

export function Parceiro() {
  return (
    <div className={styles.parceiro}>
      <img
        src="/assets/img/menu_fig.png"
        alt="Parceiro"
        className={styles.imagemParceiro}
      />
      <h4>Parceiro</h4>
    </div>
  );
}
