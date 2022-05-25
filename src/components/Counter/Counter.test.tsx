import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../store/test-store';
import { Counter } from './Counter';

describe('Counter', () => {
  it('should render 0 by default', () => {
    render(<Counter />);
    expect(screen.getByTestId('counter-value')).toContainHTML('0');
  });

  it('should contain `increment` text', () => {
    render(<Counter />);
    expect(screen.getByTestId('counter-inc')).toContainHTML('pages.counter.increment');
  });

  it('should contain `decrement` text', () => {
    render(<Counter />);
    expect(screen.getByTestId('counter-dec')).toContainHTML('pages.counter.decrement');
  });

  it('should increment by 1', () => {
    render(<Counter />);
    userEvent.click(screen.getByTestId('counter-inc'));
    expect(screen.getByTestId('counter-value')).toContainHTML('1');
  });

  it('should decrement by 1', () => {
    render(<Counter />, { preloadedState: { counter: 1 } });
    userEvent.click(screen.getByTestId('counter-dec'));
    expect(screen.getByTestId('counter-value')).toContainHTML('0');
  });

  it('should decrement by 2', () => {
    render(<Counter />);
    userEvent.click(screen.getByTestId('counter-inc2'));
    expect(screen.getByTestId('counter-value')).toContainHTML('2');
  });
});
