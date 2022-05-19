import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../store/test-store';
import { Counter } from './Counter';

describe('Counter', () => {
  it('should render 0 by default', async () => {
    render(<Counter />);
    expect(screen.getByTestId('counter-value')).toContainHTML('0');
  });

  it('should increment by 1', async () => {
    render(<Counter />);
    userEvent.click(screen.getByTestId('counter-inc'));
    expect(screen.getByTestId('counter-value')).toContainHTML('1');
  });

  it('should decrement by 1', async () => {
    render(<Counter />, { preloadedState: { counter: 1 } });
    userEvent.click(screen.getByTestId('counter-dec'));
    expect(screen.getByTestId('counter-value')).toContainHTML('0');
  });
});
