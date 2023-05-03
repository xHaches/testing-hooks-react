import React from 'react'
import { describe, test, expect, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react'
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Pruebas en <HomePage />', () => {

    const user = {
        id: '1',
        name: 'Luis',
        email: 'hola@hola.com'
    }

    afterEach(() => {
        cleanup();
    });

    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{email: '', id: '', name: ''}}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); //aria-label
        expect(preTag.innerHTML).toBe(`{\n   "email": "",\n   "id": "",\n   "name": ""\n}`)
    });

    test('debe de mostrar el componente con el usuario', () => {
        render(
            <UserContext.Provider value={{...user}}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); //aria-label
        
        expect(preTag.innerHTML)
        .toBe(`{\n   "email": "${user.email}",\n   "id": "${user.id}",\n   "name": "${user.name}"\n}`)
    });
});