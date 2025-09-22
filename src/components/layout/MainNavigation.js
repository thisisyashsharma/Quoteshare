import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import Bar from "./floatBtn/Bar"

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/quotes" className={classes.logo}>
          Ad Astra
        </NavLink>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              Astra
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              Create
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName={classes.active}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName={classes.active}>
             Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <Bar />
    </header>
  );
};

export default MainNavigation;
