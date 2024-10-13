import {navMenuConstant} from '../../libs/constant/nav-menu.constant';
import styles from './NavigateBar.module.scss';
import {clsx} from "clsx";
import {Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import {TaskTypes} from "../../libs/types/task.types";

interface INavigateBarProps {
    activeTab: 'All' | 'Completed' | 'Active'
    // setActiveTab: (value: (((prevState: string) => string) | string)) => void
    setActiveTab: Dispatch<SetStateAction<'All' | 'Completed' | 'Active'>>
    refreshNow: () => void
    tasks: TaskTypes[]
}

export const NavigateBar: FC<INavigateBarProps> = ({activeTab, setActiveTab, refreshNow, tasks}) => {
    const [activeTask, setActiveTask] = useState<TaskTypes[]>([])

    useEffect(() => {
        setActiveTask(tasks.filter(task => task.status === 'none'))
    }, [tasks])


    return (
        <nav className={styles.navContainer}>
            <p className={styles.activeTasks}>{activeTask.length} items left</p>
            <ul className={styles.list}>
                {navMenuConstant.map((item) => {
                    return (
                        <li key={item.href}
                            className={
                                clsx(styles.link, {[styles.act]: item.name === activeTab})}
                            onClick={() => setActiveTab(item.name)}
                        >
                            {item.name}
                        </li>
                    );
                })}
            </ul>
            <button className={styles.clear} onClick={refreshNow}>Clear completed</button>
        </nav>
    );
};
