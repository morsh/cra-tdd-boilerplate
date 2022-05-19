import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithHistory } from './test-utils';

describe('AppRouter', () => {

  it('should render home by default', () => {
    renderWithHistory();
    expect(screen.getByText(/You are home/)).toBeInTheDocument();
  });

  it('should render about when clicking on `about`', async () => {
    const history = renderWithHistory();
    userEvent.click(screen.getByTestId('about-link'));
    await waitFor(() => expect(history.location.pathname).toEqual('/about'));

    expect(screen.getByText(/You are on the about page/)).toBeInTheDocument();
  });

  it('should render no-match page when path isnt found', async () => {
    renderWithHistory('/some/bad/route');
    expect(screen.getByText(/no match/i)).toBeInTheDocument();
  });

  it('should render home when clicking on `home`', async () => {
    const history = renderWithHistory('/about');
    userEvent.click(screen.getByTestId('home-link'));
    await waitFor(() => expect(history.location.pathname).toEqual('/'));

    expect(screen.getByText(/You are home/)).toBeInTheDocument();
  });
});