import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ScrollToTop } from './scrollToTop';

describe('ScrollToTop', () => {
  it('renders correctly with showText set to false', () => {
    const containerRef = {
      current: {
        scrollTop: 0,
        clientHeight: 0,
        scrollHeight: 0,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      },
    };
    const { queryByText } = render(<ScrollToTop containerRef={containerRef} />);

    const nazadNaText = queryByText('NAZAD NA');
    const vrhText = queryByText('VRH');
    expect(nazadNaText).toBeNull();
    expect(vrhText).toBeNull();
  });

  it('renders "NAZAD NA" text when showText is true', () => {
    const containerRef = {
      current: {
        scrollTop: 600,
        clientHeight: 0,
        scrollHeight: 0,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      },
    };
    const { queryByText } = render(<ScrollToTop containerRef={containerRef} />);

    const nazadNaText = queryByText('NAZAD NA');
    const vrhText = queryByText('VRH');

    setTimeout(() => {
      expect(nazadNaText).toBeInTheDocument();
      expect(vrhText).toBeNull();
    }, 300);
  });

  it('renders "VRH" text when showText is true', () => {
    const containerRef = {
      current: {
        scrollTop: 600,
        clientHeight: 0,
        scrollHeight: 0,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      },
    };
    const { queryByText } = render(<ScrollToTop containerRef={containerRef} />);

    const nazadNaText = queryByText('NAZAD NA');
    const vrhText = queryByText('VRH');

    setTimeout(() => {
      expect(nazadNaText).toBeNull();
      expect(vrhText).toBeInTheDocument();
    }, 300);
  });

  it('calls scrollToTop when clicked', async () => {
    const containerRef = {
      current: {
        scrollTop: 800,
        clientHeight: 600,
        scrollHeight: 2000,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      },
    };
    const { getByText } = render(<ScrollToTop containerRef={containerRef} />);

    const scrollToTopMock = jest.fn();

    await waitFor(() => {
      setTimeout(() => {
        const vrhText = getByText('VRH');
        vrhText.onclick = scrollToTopMock;
        fireEvent.click(getByText('VRH'));
        expect(scrollToTopMock).toHaveBeenCalledTimes(1);
      }, 300);
    });
  });
});
