import {render, screen} from '@testing-library/react';
import {App} from '../App';

test('Рендеринг заголовка "todos" в App', () => {
    render(<App/>);
    expect(screen.getByText(/todos/i)).toBeInTheDocument();
});

test('Рендеринг задач в App', () => {
    const tasks = [
        {id: '1', nameTask: 'Test Task 1', status: 'none'},
        {id: '2', nameTask: 'Test Task 2', status: 'done'},
    ];

    // Мокаем локальное хранилище для теста
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(tasks));

    render(<App/>);

    // Проверяем, что задачи отображаются
    expect(screen.getByText('Test Task 1')).toBeInTheDocument();
    expect(screen.getByText('Test Task 2')).toBeInTheDocument();
});
