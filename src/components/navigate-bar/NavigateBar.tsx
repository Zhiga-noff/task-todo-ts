import { navMenuConstant } from '../../libs/constant/nav-menu.constant';
import { NavLink } from 'react-router-dom';
import styles from './NavigateBar.module.scss';

export const NavigateBar = () => {
  return (
    <nav className={styles.navContainer}>
      <p className={styles.activeTasks}>2 items left</p>
      <ul className={styles.list}>
        {navMenuConstant.map((item) => {
          return (
            <li key={item.href}>
              <NavLink
                to={item.href}
                className={({ isActive }) => {
                  return isActive ? styles.act : styles.link;
                }}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <button>Clear completed</button>
    </nav>
  );
};
