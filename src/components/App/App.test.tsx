import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render app title', () => {
    render(<App />);
    expect(screen.getByText('app.title')).toBeInTheDocument();
  });

  it('should render app-router', async () => {
    render(<App />);
    expect(screen.getByTestId('app-router')).toBeInTheDocument();
  });
});
