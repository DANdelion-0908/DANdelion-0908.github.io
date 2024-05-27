import Image from "next/image";
import styles from "./page.module.css";
import Body from "./body/Body";

export default function Home() {
  return (
    <main className={styles.main}>
      <Body />
    </main>
  );
}
