import React from 'react';
import { render, screen } from '@testing-library/react';
import { Root } from './Root';

describe('Root', () => {
  it('should render app title', () => {
    render(<Root />);
    expect(screen.getByText('app.title')).toBeInTheDocument();
  });

  it('should render app-router', () => {
    render(<Root />);
    expect(screen.getByTestId('app-router')).toBeInTheDocument();
  });
});
