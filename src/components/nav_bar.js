import * as React from 'react'
import { Link } from 'gatsby'
import { 
  navLinks,
  navLinkItem,
  navLinkText
} from './nav_bar.module.css'

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default NavBar
