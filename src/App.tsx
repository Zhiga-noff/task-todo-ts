import {useEffect, useState} from "react";
import {TaskTypes} from "./libs/types/task.types";
import {InputTask} from "./components/input-task/InputTask";
import {NavigateBar} from "./components/navigate-bar/NavigateBar";
import styles from './App.module.scss'
import {TaskElement} from "./components/task-element/TaskElement";

export const App = () => {
    const [tasks, setTasks] = useState<TaskTypes[]>([])

    useEffect(() => {
        const stringTasks = localStorage.getItem('tasks')
        if (stringTasks) {
            setTasks(JSON.parse(stringTasks) as TaskTypes[])
        }

    }, [])

    const updateStatusTask = (id: string): void => {
        const newTasksStatus = tasks.map((task) => {
            if (task.id === id && task.status === 'none') {
                task.status = 'done'
            } else if (task.id === id && task.status === 'done') {
                task.status = 'none'
            }

            return task
        })
        localStorage.setItem('tasks', JSON.stringify(newTasksStatus))
        setTasks(newTasksStatus)
    }

    return (
        <>
            <h1>todos</h1>
            <main className={styles.container}>
                <div className={styles.background}>
                    <InputTask updateTasks={setTasks}/>
                    {Boolean(tasks.length) && <ul>
                        {tasks.map(task => <TaskElement key={task.id} task={task} statusUpdate={updateStatusTask}/>)}
                    </ul>}
                    <NavigateBar/>
                </div>
            </main>
        </>
    );
};
