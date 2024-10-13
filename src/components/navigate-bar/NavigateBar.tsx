import {navMenuConstant} from '../../libs/constant/nav-menu.constant';
import styles from './NavigateBar.module.scss';
import {useState} from "react";

export const NavigateBar = () => {

    const [isActive, setIsActive] = useState(true)

    return (
        <nav className={styles.navContainer}>
            <p className={styles.activeTasks}>2 items left</p>
            <ul className={styles.list}>
                {navMenuConstant.map((item) => {
                    return (
                        <li key={item.href}
                            className={`${styles.link} ${isActive ? styles.act : styles.link}`}
                        >
                            {item.name}
                        </li>
                    );
                })}
            </ul>
            <button className={styles.clear}>Clear completed</button>
        </nav>
    );
};
