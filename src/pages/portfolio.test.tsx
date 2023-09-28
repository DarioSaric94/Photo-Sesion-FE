import React from 'react';
import { render, screen } from '@testing-library/react';
import Portfolio from './portfolio';
import * as redux from 'react-redux';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/your/mock/pathname',
  }),
}));

describe('Portfolio Component', () => {
  const useSelectorMock = jest.spyOn(redux, 'useSelector');
  it('renders without crashing', () => {
    render(<Portfolio />);
  });

  it('displays the AddYoutubeLink component for admin users', () => {
    render(<Portfolio />);
    useSelectorMock.mockReturnValueOnce(1);

    setTimeout(() => {
      const addYoutubeLinkComponent = screen.getByTestId('youtube-link-test');
      expect(addYoutubeLinkComponent).toBeInTheDocument();
    }, 300)
  });
});
