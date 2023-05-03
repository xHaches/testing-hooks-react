import React from 'react'
import {describe, test, expect, vi, beforeAll, afterEach} from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en el <TodoItem />', () => {
    
    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = vi.fn();
    const onToggleTodoMock = vi.fn();

    beforeAll(() => {
        vi.clearAllMocks()
    });
    
    afterEach(() => {
        cleanup();
    })

    test('debe de mostrar el Todo pendiente de completar', () => {
        render(
            <TodoItem 
                todo={todo}
                onToggleTodo={onToggleTodoMock} 
                onDelete={onDeleteTodoMock} 
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
    });

    test('debe de mostrar el Todo completado', () => {
        todo.done = true;
        
        render(
            <TodoItem 
                todo={todo}
                onToggleTodo={onToggleTodoMock} 
                onDelete={onDeleteTodoMock} 
            />
        );
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('span debe de llamar el ToggleTodo cuando se hace click', () => {
        render(
            <TodoItem 
                todo={todo}
                onToggleTodo={onToggleTodoMock} 
                onDelete={onDeleteTodoMock} 
            />
        );
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

    });

    test('button debe de llamar el deleteTodo', () => {
        render(
            <TodoItem 
                todo={todo}
                onToggleTodo={onToggleTodoMock} 
                onDelete={onDeleteTodoMock} 
            />
        );
        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    });
});