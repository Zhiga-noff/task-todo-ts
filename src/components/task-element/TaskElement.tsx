import {TaskTypes} from "../../libs/types/task.types";
import {FC} from "react";
import styles from './TaskElement.module.scss'
import {Checkbox} from "../ui/checkbox/Checkbox";
import {clsx} from "clsx";


interface ITaskElementProps {
    task: TaskTypes
    statusUpdate: (id: string) => void
}

export const TaskElement: FC<ITaskElementProps> = ({task, statusUpdate}) => {


    return (
        <li className={styles.task} onClick={() => statusUpdate(task.id)}>
            <div className={styles.checkbox}>
                {task.status === "done" && <Checkbox/>}
            </div>
            <p className={clsx(styles.nameTask, {[styles.taskDone]: task.status === 'done'})}>{task.nameTask}</p>
        </li>
    );
};
