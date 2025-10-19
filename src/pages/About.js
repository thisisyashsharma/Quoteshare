import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <section className={styles.section}>
        <h2>About Developer</h2>
        <div className={styles.container}>
          <div className={styles.shimmer}></div>
          <div className={styles.shimmer}></div>
          <h3>hiii, I'm Yash 😉</h3>
        </div>
      </section>
    </>
  );
};

export default Contact;
