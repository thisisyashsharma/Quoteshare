import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <section className={styles.section}>
        <h2>More Projects from Yash</h2>
        <div className={styles.container}>
          <a href="https://thisisyashsharma.github.io/MarvelProject/" target="_blank">Marvel Project</a>
          <a href="https://ap2.vercel.app/" target="_blank">Academic Project</a>
          <a href="https://yashsha.vercel.app/" target="_blank">Portfolio Project</a>
          <a href="https://nexas.vercel.app/signup" target="_blank">Authentication Project</a>
          <a href="https://thisisyashsharma.github.io/smallportfolio/" target="_blank">Tiny Portfolio</a>
          <a href="https://resourc.vercel.app/" target="_blank">Experiment </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
