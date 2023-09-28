import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Footer', () => {
  const useRouter = jest.spyOn(require('next/router'), 'useRouter');

  it('should initially show the footer on the homepage', () => {
    const mockRouterPush = jest.fn();
    useRouter.mockReturnValue({ push: mockRouterPush });
    const containerRef = {
      current: {
        scrollTop: 0,
        clientHeight: 0,
        scrollHeight: 0,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      },
    };

    useRouter.mockReturnValue({ pathname: '/' });

    render(<Footer containerRef={containerRef} />);

    const copyRight = screen.queryByText(
      /COPYRIGHT FOTOMISKIC; 2021. SVA PRAVA SADRŽANA./i
    );
    const footer = screen.getByTestId('footer-test');
    expect(copyRight).not.toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it('should hide the footer when scrolled less than 90% on non-homepage', () => {
    const containerRef = {
      current: {
        scrollTop: 10,
        clientHeight: 60,
        scrollHeight: 2000,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      },
    };

    useRouter.mockReturnValue({ pathname: '/something-else' });

    render(<Footer containerRef={containerRef} />);

    const footer = screen.getByTestId('footer-test');

    setTimeout(() => {
      expect(footer).not.toBeInTheDocument();
    }, 300);
  });

  it('should show the footer when scrolled 90% on non-homepage', () => {
    const containerRef = {
      current: {
        scrollTop: 900,
        clientHeight: 500,
        scrollHeight: 1000,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      },
    };

    render(<Footer containerRef={containerRef} />);

    const footer = screen.getByText(
      /COPYRIGHT FOTOMISKIC; 2021. SVA PRAVA SADRŽANA./i
    );
    expect(footer).toBeInTheDocument();
  });

  it('should initially hide the footer on non-homepage', () => {
    const containerRef = {
      current: {
        scrollTop: 0,
        clientHeight: 500,
        scrollHeight: 1000,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      },
    };

    render(<Footer containerRef={containerRef} />);

    const footer = screen.queryByText(
      /COPYRIGHT FOTOMISKIC; 2021. SVA PRAVA SADRŽANA./i
    );
    setTimeout(() => {
      expect(footer).not.toBeInTheDocument();
    }, 300);
  });
});
