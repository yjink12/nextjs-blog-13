import React from "react";
import styles from "../../page.module.css";
import TodosList from "./components/TodosList";

type Props = {};

function Todos({}: Props) {
  return (
    <main className={styles.main}>
      <div className={styles.description}>This is todos page.</div>
    </main>
  );
}

export default Todos;
