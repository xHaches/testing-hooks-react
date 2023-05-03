import { describe, test, expect, afterEach } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en el useCounter', () => {

    test('debe de retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter())
        const { counter, decrement, increment, reset } = result.current;
        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
    });

    test('debe de generar el counter con el valor de 100', () => {
        const { result } = renderHook(() => useCounter(100))
        const { counter } = result.current;
        expect(counter).toBe(100);
    });
    test('debe de incrementar el contador', () => {
        const { result } = renderHook(() => useCounter())
        const { counter, increment } = result.current;
        // 
        act(() => {
            increment();
            increment(2);
        });
        expect(result.current.counter).toBe(13);
    });
    test('debe decrementar el contador', () => {
        const { result } = renderHook(() => useCounter())
        const { counter, decrement } = result.current;
        act(() => {
            decrement();
            decrement(2);
        });
        expect(result.current.counter).toBe(7)
    });
    test('debe resetear el contador', () => {
        const { result } = renderHook(() => useCounter(77))
        const { reset, decrement } = result.current;
        act(() => {
            decrement(5);
            decrement(5);
            decrement(5);
            reset()
        });
        expect(result.current.counter).toBe(77)
    });
});