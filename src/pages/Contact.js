import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <section className={styles.section}>
        <h2>More Projects from Yash</h2>
        <div className={styles.container}>
          <a href="http://www.yashsha.com/">Marvel Project</a>
          <a href="https://ap2.vercel.app/">Academic Project</a>
          <a href="https://yashsha.vercel.app/">Portfolio Project</a>
          <a href="https://nexas.vercel.app/signup">Authentication Project</a>
          <a href="https://thisisyashsha.github.io/sp/">Tiny Portfolio</a>
          <a href="https://resourc.vercel.app/">Experiment </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
