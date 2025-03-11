import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Doppler demo</h1>
         <p>Hello world</p> 
        <div className={styles.ctas}>
         
        </div>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
