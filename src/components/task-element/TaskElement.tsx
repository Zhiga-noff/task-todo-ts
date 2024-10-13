import {TaskTypes} from "../../libs/types/task.types";
import {FC} from "react";
import styles from './TaskElement.module.scss'
import {Checkbox} from "../ui/checkbox/Checkbox";

interface ITaskElementProps {
    task: TaskTypes
}

export const TaskElement: FC<ITaskElementProps> = ({task}) => {
    return (
        <li className={styles.task}>
            <div className={styles.checkbox}>
                {task.status === "done" && <Checkbox/>}
            </div>
            <p className={styles.nameTask}>{task.nameTask}</p>
        </li>
    );
};
