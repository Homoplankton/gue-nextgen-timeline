import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/" className="header-logo">
        Homoplankton
      </Link>
      <nav className="header-nav">
        <Link
          to="/"
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Timeline
        </Link>
        <span className="nav-separator">/</span>
        <Link
          to="/blog"
          className={`nav-link ${location.pathname.startsWith('/blog') ? 'active' : ''}`}
        >
          Blog
        </Link>
      </nav>
    </header>
  );
}

export default Header;
