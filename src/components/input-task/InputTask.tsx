import styles from './InputTask.module.scss';
import * as React from "react";
import {ChangeEventHandler, FC, FormEventHandler, useId, useState} from "react";
import {TaskTypes} from "../../libs/types/task.types";

interface IInputProps {
    updateTasks: (value: (((prevState: TaskTypes[]) => TaskTypes[]) | TaskTypes[])) => void
}


export const InputTask: FC<IInputProps> = ({updateTasks}) => {
    const [taskName, setTaskName] = useState<string>('')
    const idTask = useId()

    const onChangeTask: ChangeEventHandler = (event) => {
        setTaskName(event.target.value as string)
    }

    const submitTask: FormEventHandler = (event) => {
        event.preventDefault()

        const newTask: TaskTypes = {
            nameTask: taskName,
            id: idTask,
            status: 'none'
        }

        updateTasks((prevState) => {
            console.log(prevState)
            const updateArr = [...prevState, newTask]
            localStorage.setItem('tasks', JSON.stringify(updateArr))
            return updateArr
        })

        setTaskName('')
    }

    return (
        <form className={styles.inputContainer} onSubmit={submitTask}>
            <button className={styles.arrowBtn}></button>
            <input type="text" className={styles.input} onChange={onChangeTask} value={taskName}
                   placeholder={'What needs to be done?'}/>
        </form>
    );
};
