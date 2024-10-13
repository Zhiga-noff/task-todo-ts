import {fireEvent, render, screen} from '@testing-library/react';
import {InputTask} from '../InputTask'; // Путь к компоненту
import '@testing-library/jest-dom'; // Для toBeInTheDocument

test('Добавление новой задачи через InputTask', () => {
    const updateTasks = jest.fn();

    render(<InputTask updateTasks={updateTasks}/>);

    const input = screen.getByPlaceholderText('What needs to be done?') as HTMLInputElement; // Указываем тип как HTMLInputElement
    const button = screen.getByRole('button');

    fireEvent.change(input, {target: {value: 'New Task'}});
    fireEvent.click(button);

    // Проверка, что updateTasks был вызван, а input очищен
    expect(updateTasks).toHaveBeenCalledWith(expect.any(Function));
    expect(input.value).toBe('');  // Проверка, что значение input очищено
});
