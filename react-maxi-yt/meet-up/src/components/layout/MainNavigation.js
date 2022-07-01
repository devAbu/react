import { Link } from "react-router-dom";

export default function MainNavigation() {
  return (
    <header>
      <div>React Meetups</div>
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
