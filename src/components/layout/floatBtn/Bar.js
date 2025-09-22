import React from "react";
import { useEffect, useState } from "react";
import styles from "./BackToTop.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineContacts } from "react-icons/md";
import { BiHomeAlt } from "react-icons/bi";
import { MdPostAdd } from "react-icons/md";
import { CgShapeCircle } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Bar = () => {
  return (
    <>
      <div className={styles.container}>
        <li>
          <div>
            <NavLink to="/quotes" activeClassName={styles.active}>
              <BiHomeAlt className={styles.icons}/>
            </NavLink>
          </div>
          <span>Home</span>
        </li>
        <li>
          <div>
            <NavLink to="/new-quote" activeClassName={styles.active}>
              <MdPostAdd className={styles.icons}/>
            </NavLink>
          </div>
          <span>Create</span>
        </li>
        <li>
          <div>
            <NavLink to="/about" activeClassName={styles.active}>
              <CgShapeCircle className={styles.icons}/>
            </NavLink>
          </div>
          <span>About</span>
        </li>
        <li>
          <div>
            <NavLink
              className={styles.a}
              activeClassName={styles.active}
              to="/Contact"
            >
              {/* <AiOutlineUser /> */}
              <MdOutlineContacts className={styles.icons}/>
            </NavLink>
          </div>
          <span>Contact</span>
        </li>
      </div>
    </>
  );
};

export default Bar;
