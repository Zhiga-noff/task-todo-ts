import {TaskTypes} from "../../libs/types/task.types";
import {FC} from "react";
import {TaskElement} from "./task-element/TaskElement";

interface ITaskListProps {
    tasks: TaskTypes[]
}


export const TaskList: FC<ITaskListProps> = ({tasks}) => {
    return (
        <ul>
            {tasks.map(task => <TaskElement task={task}/>)}
        </ul>
    );
};
