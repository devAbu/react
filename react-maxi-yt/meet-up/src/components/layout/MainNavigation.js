import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="new-meetup">New</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
