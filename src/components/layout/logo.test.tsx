import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Logo } from './logo';

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('Logo', () => {
  it('renders the Logo component', () => {
    const { getByText } = render(<Logo />);

    expect(getByText('F')).toBeInTheDocument();
    expect(getByText('OTO')).toBeInTheDocument();
    expect(getByText('S')).toBeInTheDocument();
    expect(getByText('TEVOS')).toBeInTheDocument();
  });

  it('navigates to "/" when clicked', () => {
    const pushMock = jest.fn();
    useRouter.mockImplementation(() => ({
      push: pushMock,
    }));

    const { getByTestId } = render(<Logo />);
    const logoElement = getByTestId('logo-test');

    fireEvent.click(logoElement);

    expect(pushMock).toHaveBeenCalledWith('/');
  });
});
