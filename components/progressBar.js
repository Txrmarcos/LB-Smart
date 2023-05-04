import { useState } from "react";
import styles from "../styles/progressBar.module.css";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const incremenProgress = () => {
    if (progress < 100) {
      setProgress(progress + 20);
    } else {
      setProgress(100);
    }
  };

  return (
    <>
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: `${progress}%` }}>
        </div>
        <p className={styles.text}>
        {progress}

        </p>
      </div>
      <button
        onClick={() => {
          incremenProgress();
        }}
      >
        Check-in
      </button>
    </>
  );
}
