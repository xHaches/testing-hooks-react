import { act, renderHook } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { useForm } from '../../src/hooks'

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Fernando',
        email: 'test@test.com'
    }

    test('debe de regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
        })
    });

    test('debe de cambiar el nombre del formulario', () => {
        const newValue = 'Juan';
        // montar el hook
        const { result } = renderHook(() => useForm<{name: string, email: string}>(initialForm));
        const { onInputChange } = result.current;
        act(() => {
            onInputChange(({target: {name: 'name', value: newValue}} as any));
        });

        expect(result.current.name).toBe(newValue);
        // onInputChange() // act, event
        //expect. result.current.name === Juan
        //expect. result.current.forState  .name === Juan
    });

    test('debe de realizar el reset del formulario', () => {
        const newValue = 'Juan';
        // montar el hook
        const { result } = renderHook(() => useForm<{name: string, email: string}>(initialForm));
        const { onInputChange, onResetForm } = result.current;
        act(() => {
            onInputChange(({target: {name: 'name', value: newValue}} as any));
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        // onInputChange() // act, event
        //expect. result.current.name === Juan
        //expect. result.current.forState  .name === Juan
    });
});