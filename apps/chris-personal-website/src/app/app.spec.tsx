import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './app';

describe('App', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/');
  });

  it('renders the intro heading and all home sections', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: 'Chris May' })
    ).toBeInTheDocument();
    for (const section of [
      'A little about myself...',
      'Personal Projects',
      'Professional Portfolio',
      'Skills',
      'Wanna Say Hey?',
    ]) {
      expect(
        screen.getByRole('heading', { name: section })
      ).toBeInTheDocument();
    }
  });

  it('shows the welcome popup and closes it on Enter Site', async () => {
    render(<App />);
    const enter = screen.getByRole('button', { name: 'Enter Site!' });
    expect(enter).toBeInTheDocument();
    await userEvent.click(enter);
    expect(
      screen.queryByRole('button', { name: 'Enter Site!' })
    ).not.toBeInTheDocument();
  });

  it('renders the resume page on /resume', () => {
    window.history.pushState({}, '', '/resume');
    render(<App />);
    expect(screen.getByText("Chris May's Resume")).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Return To Home/ })
    ).toHaveAttribute('href', '/');
  });
});
