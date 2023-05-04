import styles from "../styles/Spotify.module.css";

export default function Spotify() {
  return (
    <main className={styles.box}>
      <div className={styles.container}>
        <div className={styles.navS}>
          <input></input>
        </div>
        
        <form className={styles.search}>
          <select>
            <option>test</option>
            <option>tes</option>
            <option>tes</option>
          </select>
          <select>
            <option>tes</option>
            <option>tes</option>
            <option>tes</option>
          </select>
          <select>
            <option>tes</option>
            <option>tes</option>
            <option>tes</option>
          </select>
          <select>
            <option>tes</option>
            <option>tes</option>
            <option>tes</option>
          </select>
        </form>
        <button>teste</button>
      </div>
      <div className={styles.playlist}>
        <div className={styles.slider}>

        </div>
      </div>
    </main>
  );
}
