import { describe, expect, test } from 'vitest';    
import { Actions, todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Pruebas en todoReducer', () => {
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }];

    const newState = todoReducer(initialState, {
        type: Actions.DEFAULT,
        payload: {
            id: 123,
            description: 'Piedra',
            done: false
        }
    });
    test('debe de regresar el estado inicial', () => {
        expect(newState).toBe(initialState)
    });

    test('debe de agregar un todo ', () => {
        
        const action = {
            type: Actions.ADD,
            payload: {
                id: 2,
                description: 'Nuevo',
                done: false
            }
        }
        const addState = todoReducer(newState, action);
        expect(addState.length).toBe(2);
        expect(addState).toContain(action.payload);
    });

    test('debe de eliminar un todo ', () => {
        
        const action = {
            type: Actions.REMOVE,
            payload: initialState[0]
        }
        const removeState = todoReducer(newState, action);
        expect(removeState.length).toBe(0);
    });

    test('debe de realizar el Toggle del TODO', () => {
        const action = {
            type: Actions.TOGGLE,
            payload: initialState[0]
        }

        const toggleState = todoReducer(newState, action);
        expect(toggleState[0].done).toBeTruthy();
    });
});