import {render, screen} from '@testing-library/react';
import {NavigateBar} from '../NavigateBar';
import {TaskTypes} from '../../../libs/types/task.types';

test('Рендеринг и правильное отображение задач в NavigateBar', () => {
    // Подготовка данных с правильными значениями для 'status'
    const tasks: TaskTypes[] = [
        {id: '1', nameTask: 'Test Task 1', status: 'none'}, // status должно быть 'none' или 'done'
        {id: '2', nameTask: 'Test Task 2', status: 'done'},  // status должно быть 'none' или 'done'
    ];

    // Мокируем функции
    const setActiveTab = jest.fn();
    const refreshNow = jest.fn();

    // Рендерим компонент
    render(
        <NavigateBar
            activeTab="All"
            setActiveTab={setActiveTab}
            refreshNow={refreshNow}
            tasks={tasks}
        />
    );

    // Проверяем, что количество оставшихся задач отображается корректно
    expect(screen.getByText('1 items left')).toBeInTheDocument();

    // Проверяем, что кнопка "Clear completed" отображается
    expect(screen.getByText('Clear completed')).toBeInTheDocument();

    // Проверяем, что ссылки для фильтров (например, "All", "Active", "Completed") отображаются
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
});
