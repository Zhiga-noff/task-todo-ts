import {TaskTypes} from "../../../libs/types/task.types";
import {FC} from "react";

interface ITaskElementProps {
    task: TaskTypes
}

export const TaskElement: FC<ITaskElementProps> = ({task}) => {
    return (
        <li>
            {task.nameTask}
        </li>
    );
};
