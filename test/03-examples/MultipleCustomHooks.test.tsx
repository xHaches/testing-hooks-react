import React from 'react'
import { describe, test, expect, afterEach, vi, beforeEach } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks'
// cuando se hace mock no se importa desde el archivo de barril para no hacer un mock del counter que esta siendo usado ahi
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

vi.mock('../../src/hooks/useFetch');
vi.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks>', () => {

    const mockIncrement = vi.fn();

    (useCounter as any).mockReturnValue({
        counter: 1,
        increment: mockIncrement
    })

    afterEach(() => {
        cleanup();
    })
    
    beforeEach(() => {
        vi.clearAllMocks();
    })

    test('debe mostrar el componente por defecto', () => {
        (useFetch as any).mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });


        render(<MultipleCustomHooks />);
        expect(screen.getByText('Loading...')).toBeTruthy();
        expect(screen.getByText('Breaking Bad Quotes')).toBeTruthy();
        const nextButton = screen.getByRole<HTMLButtonElement>('button', { name: 'Next Quote' });
        expect(nextButton.disabled).toBeTruthy();
    });

    test('debe de mostrar un Quote', () => {

        (useFetch as any).mockReturnValue({
            data: [{
                author: 'Fernando', quote: 'Hola Mundo',
            }],
            isLoading: false,
            hasError: null
        });
        render(<MultipleCustomHooks />);
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Fernando')).toBeTruthy();
        const nextButton = screen.getByRole<HTMLButtonElement>('button', { name: 'Next Quote' });
        expect(nextButton.disabled).toBeFalsy();
    });

    test('debe de llamar la función de incrementar', () => {
        (useFetch as any).mockReturnValue({
            data: [{
                author: 'Fernando', quote: 'Hola Mundo',
            }],
            isLoading: false,
            hasError: null
        });
        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole<HTMLButtonElement>('button', { name: 'Next Quote' });
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });
});