import {render, screen} from '@testing-library/react';
import {TaskElement} from '../TaskElement'; // Убедитесь, что путь к компоненту верный
import '@testing-library/jest-dom'; // Для toBeInTheDocument

test('Рендеринг задачи с правильным статусом', () => {
    // Убедитесь, что статус является одним из допустимых значений 'none' или 'done'
    const task = {
        id: '1',
        nameTask: 'Test Task',
        status: 'none' as 'none' | 'done',  // Приведите к типу, чтобы TypeScript не ругался
    };

    const statusUpdate = jest.fn();

    render(<TaskElement task={task} statusUpdate={statusUpdate}/>);

    const taskElement = screen.getByText(/Test Task/i);
    expect(taskElement).toBeInTheDocument();
});
