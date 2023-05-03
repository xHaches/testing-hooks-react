import React from 'react'
import { describe, test, expect, afterEach, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { LoginPage } from '../../src/09-useContext/LoginPage';
import { UserContext } from '../../src/09-useContext/context/UserContext';



describe('Pruebas en <LoginPage />', () => {

    const setUserMock = vi.fn();

    const user = {
        name: 'Luis',
        email: 'test@test.com',
        id: '2',
      }

    afterEach(() => {
        cleanup();
    });

    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{email: '', id: '', name: ''}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); //aria-label
        expect(preTag.innerHTML).toBe(`{\n   "email": "",\n   "id": "",\n   "name": ""\n}`)
    });

    test('debe de mostrar el componente con el usuario', () => {
        render(
            <UserContext.Provider value={{...user}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); //aria-label
        
        expect(preTag.innerHTML)
        .toBe(`{\n   "email": "${user.email}",\n   "id": "${user.id}",\n   "name": "${user.name}"\n}`)
    });

    test('debe llamar la funcion setUser con el objeto dado', () => {
        render(
            <UserContext.Provider value={{...user, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        );
        const button = screen.getByText('Set user');
        fireEvent.click(button)
        expect(setUserMock).toHaveBeenCalledWith(user);
    });
});