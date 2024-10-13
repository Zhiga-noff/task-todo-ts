import styles from './InputTask.module.scss';
import * as React from "react";
import {ChangeEventHandler, FC, FormEventHandler, useState} from "react";
import {TaskTypes} from "../../libs/types/task.types";
import {idGenerate} from "../../utils/id-generate";

interface IInputProps {
    updateTasks: (value: (((prevState: TaskTypes[]) => TaskTypes[]) | TaskTypes[])) => void
}


export const InputTask: FC<IInputProps> = ({updateTasks}) => {
    const [taskName, setTaskName] = useState<string>('')
    const idTask = idGenerate().toString()


    const onChangeTask: ChangeEventHandler = (event) => {
        setTaskName(event.target.value as string)
    }

    const submitTask: FormEventHandler = (event) => {
        event.preventDefault()
        if (taskName.trim() === '') {
            return
        }

        const newTask: TaskTypes = {
            nameTask: taskName.trim(),
            id: idTask,
            status: 'none'
        }

        updateTasks((prevState) => {
            const updateArr = [...prevState, newTask]
            localStorage.setItem('tasks', JSON.stringify(updateArr))
            return updateArr
        })

        setTaskName('')
    }

    return (
        <form className={styles.inputContainer} onSubmit={submitTask}>
            <button className={styles.arrowBtn} type={"button"}></button>
            <input type="text" className={styles.input} onChange={onChangeTask} value={taskName}
                   placeholder={'What needs to be done?'}/>
        </form>
    );
};
