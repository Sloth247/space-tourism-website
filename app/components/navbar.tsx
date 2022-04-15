import Logo from './logo';
import MenuBtn from './hamburger';
import { useState } from 'react';
import { Link } from '@remix-run/react';

export default function navbar() {
  const [clicked, setClicked] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
    setExpanded(!expanded);
  };
  return (
    <nav className="nav">
      <Logo />
      <MenuBtn
        handleClick={handleClick}
        expanded={expanded}
        clicked={clicked}
      />
      <div
        className={!clicked ? 'nav__container' : 'nav__container active'}
        id="menu-container"
      >
        <ul className="nav__menu">
          <li>
            <Link to="/">
              <span>00</span> Home
            </Link>
          </li>
          <li>
            <Link to="/destination">
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="/crew">
              <span>02</span> Crew
            </Link>
          </li>
          <li>
            <Link to="/technology">
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
