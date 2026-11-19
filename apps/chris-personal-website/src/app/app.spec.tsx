import { render, screen } from '@testing-library/react';

import App from './app';

describe('App', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/');
  });

  it('renders the name, bio links and every section', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Chris May' })
    ).toBeInTheDocument();
    for (const name of ['About', 'Work', 'Projects', 'Contact']) {
      expect(
        screen.getByRole('heading', { level: 2, name })
      ).toBeInTheDocument();
    }
    expect(screen.getAllByRole('link', { name: 'Resume' })[0]).toHaveAttribute(
      'href',
      '/assets/chris_may_2026_resume.pdf'
    );
    expect(screen.getAllByRole('link', { name: 'GitHub' })[0]).toHaveAttribute(
      'href',
      'https://github.com/mayc2'
    );
  });

  it('lists work history and projects with real links', () => {
    render(<App />);
    expect(screen.getAllByText('Verantos').length).toBeGreaterThan(0);
    expect(screen.getByText('Workday')).toBeInTheDocument();
    expect(screen.getByText(/Wedding website & guestbook/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /This site/ })).toHaveAttribute(
      'href',
      'https://github.com/mayc2/personal-website'
    );
  });

  it('renders the resume page on /resume', () => {
    window.history.pushState({}, '', '/resume');
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Resume' })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Open the PDF' })).toHaveAttribute(
      'href',
      '/assets/chris_may_2026_resume.pdf'
    );
  });
});
