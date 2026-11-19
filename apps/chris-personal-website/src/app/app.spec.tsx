import { render, screen } from '@testing-library/react';

import App from './app';

describe('App', () => {
  beforeEach(() => {
    window.history.pushState({}, '', '/');
  });

  it('renders the headline, photo, nav and every section', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Hi, I’m Chris/
    );
    expect(screen.getByRole('img', { name: /Chris May/ })).toHaveAttribute(
      'src',
      '/assets/Chris.png'
    );
    for (const name of [
      'About',
      'Work',
      'Selected projects',
      'Writing',
      'Wanna say hey?',
    ]) {
      expect(
        screen.getByRole('heading', { level: 2, name })
      ).toBeInTheDocument();
    }
    const nav = screen.getByRole('navigation', { name: 'Primary' });
    expect(nav).toHaveTextContent('Writing');
    expect(screen.getAllByRole('link', { name: 'Resume' })[0]).toHaveAttribute(
      'href',
      '/assets/chris_may_2026_resume.pdf'
    );
  });

  it('lists work, projects and writing', () => {
    render(<App />);
    expect(screen.getAllByText('Verantos').length).toBeGreaterThan(0);
    expect(screen.getByText('Workday')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /This site/ })).toHaveAttribute(
      'href',
      'https://github.com/mayc2/personal-website'
    );
    expect(screen.getByRole('link', { name: 'Hello again' })).toHaveAttribute(
      'href',
      '/writing/hello-again'
    );
  });

  it('renders a post page from markdown', () => {
    window.history.pushState({}, '', '/writing/hello-again');
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Hello again' })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/sat untouched from August 2021/)
    ).toBeInTheDocument();
  });

  it('renders the resume page on /resume', () => {
    window.history.pushState({}, '', '/resume');
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Resume' })
    ).toBeInTheDocument();
  });
});
