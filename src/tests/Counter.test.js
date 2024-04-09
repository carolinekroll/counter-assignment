// import necessary react testing library helpers here
import React from 'react';
import { render, act, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';


beforeEach(() => {
    // Render the Counter component here
    render(<Counter />);
})

test('renders counter message', () => {
    // Complete the unit test below based on the objective in the line above
    const counterMessage = document.querySelector('h2');
    expect(counterMessage.textContent).toBe('Counter');
});

test('should render initial count with value of 0', () => {
    // Complete the unit test below based on the objective in the line above
    const countValue = document.querySelector('[data-testid="count"]');
    expect(countValue.textContent).toBe('0');
});

test('clicking + increments the count', () => {
    // Complete the unit test below based on the objective in the line above
    const button = screen.getByText('+');
    act(() => {
        button.click();
    });
    const countValue = document.querySelector('[data-testid="count"]');
    expect(countValue.textContent).toBe('1');

    act(() => {
        button.click();
    });
    const newCountValue = document.querySelector('[data-testid="count"]');
    expect(newCountValue.textContent).toBe('2');
});

test('clicking - decrements the count', () => {
    // Complete the unit test below based on the objective in the line above
    const button = screen.getByText('-');
    act(() => {
        button.click();
    });
    const countValue = document.querySelector('[data-testid="count"]');
    expect(countValue.textContent).toBe('-1');

    act(() => {
        button.click();
    });
    const newCountValue = document.querySelector('[data-testid="count"]');
    expect(newCountValue.textContent).toBe('-2');
});
