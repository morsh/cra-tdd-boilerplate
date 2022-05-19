import React from 'react';
import { render } from '@testing-library/react';
import { AppRouter } from './AppRouter';
import { createMemoryHistory } from 'history';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';

export const renderWithHistory = (location?: string) => {
  const history = createMemoryHistory();
  if (location) {
    history.push(location);
  }
  render(
    <HistoryRouter history={history}>
      <AppRouter />
    </HistoryRouter>
  );
  return history;
};
