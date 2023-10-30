import Image from "next/image";
import styles from "./page.module.css";

type Props = {};

export default function Home({}: Props) {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>This is Home Page</div>
      </div>
    </main>
  );
}
