import { Link, NavLink } from 'react-router-dom';
import SvgIcon from '../SvgIcon/SvgIcon';
import css from './Header.module.css';
import createActiveLink from '../../utils/activeLink.js';

export default function Header() {
  return (
    <header className={css.header}>
      <div className="container">
        <nav className={css.header__navigation}>
          <Link to="/" className={css.logo}>
            <SvgIcon name={'logo'} className={css.logo__icon} />
          </Link>
          <ul className={css.navigation__list}>
            <li className={css.navigation__list_item}>
              <NavLink
                to="/"
                className={createActiveLink(css.active__nav_link, [
                  css.navigation__list_link,
                ])}>
                Home
              </NavLink>
            </li>
            <li className={css.navigation__list_item}>
              <NavLink
                to="/catalog"
                className={createActiveLink(css.active__nav_link, [
                  css.navigation__list_link,
                ])}>
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
