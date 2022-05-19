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

  it('should render app-router', async () => {
    render(<App />);
    expect(screen.getByTestId('app-router')).toBeInTheDocument();
  });
});
