import styles from "../styles/tiktok.module.css";

export default function Tiktok() {
  return (
    <div className={styles.container}>
      <div className={styles.texto}>
        <h1>Escolha seu perfil</h1>
      </div>
      <div className={styles.escolhaPerfil}>
        <button>test</button>
        <button>test</button>
        <button>test</button>
      </div>
      <div className={styles.carrossel}>
        <div className={styles.tiktok}></div>
        <button>Enviar</button>
      </div>
    </div>
  );
}
