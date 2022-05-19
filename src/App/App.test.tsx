import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render `Hello World`', () => {
    render(<App />);
    expect(screen.getByText('Hello World 1')).toBeInTheDocument();
  });

  it('should render `some text`', () => {
    render(<App />);
    expect(screen.getByText('some text')).toBeInTheDocument();
  });

  it('should have App class', async () => {
    render(<App />);
    const rootApp = await screen.getByTestId('root-app');
    expect(rootApp).toHaveAttribute('class', 'App');
    expect(rootApp.childElementCount).toEqual(2);
  });
});
