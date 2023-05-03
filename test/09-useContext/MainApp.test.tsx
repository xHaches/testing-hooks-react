import React from 'react'
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <MainApp />', () => {
    test('debe de mostrar el HomePage', () => {
        render(
            // no estamos en browser por eso se usa memoryRouter
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('HomePage')).toBeTruthy();
    });

    test('debe de mostrar el LoginPage', () => {
        render(
            // no estamos en browser por eso se usa memoryRouter
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('LoginPage')).toBeTruthy();
    });

    test('debe de mostrar el AboutPage', () => {
        render(
            // no estamos en browser por eso se usa memoryRouter
            <MemoryRouter initialEntries={['/about']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('AboutPage')).toBeTruthy();
    });
});