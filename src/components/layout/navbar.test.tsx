import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Navbar } from './navbar';
import { getUserData } from '@/utils/userData.api';
import * as redux from 'react-redux';

jest.mock('../../utils/userData.api', () => ({
  getUserData: jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Navbar', () => {
  const pushMock = jest.fn();
  const useDispatch = jest.spyOn(redux, 'useDispatch');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the Navbar components', () => {
    const { getByText, queryByTestId } = render(<Navbar />);

    expect(queryByTestId('custom-drawer-test')).not.toBeInTheDocument();
    expect(getByText('POČETNA')).toBeInTheDocument();
    expect(getByText('PORTFOLIO')).toBeInTheDocument();
    expect(getByText('PRIVATNO')).toBeInTheDocument();
  });

  it('navigates to different pages when links are clicked', () => {
    const { getByText } = render(<Navbar />);

    jest.spyOn(require('next/router'), 'useRouter').mockReturnValue({
      push: pushMock,
    });

    fireEvent.click(getByText('POČETNA'));
    setTimeout(() => {
      expect(pushMock).toHaveBeenCalledWith('/');
    }, 300);

    fireEvent.click(getByText('PORTFOLIO'));
    setTimeout(() => {
      expect(pushMock).toHaveBeenCalledWith('/portfolio');
    }, 300);
  });

  it('opens the CustomDrawer when ". . ." link is clicked', () => {
    const { getByText, getByTestId } = render(<Navbar />);

    fireEvent.click(getByText('. . .'));

    setTimeout(() => {
      expect(getByTestId('custom-drawer')).toBeInTheDocument();
    }, 1000);
  });

  it('opens the SmallScreenDrawer when SmallScreenNavbar is clicked', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1000,
    });

    const { getByTestId } = render(<Navbar />);

    setTimeout(() => {
      fireEvent.click(getByTestId('small-screen-navbar-test'));
    }, 1000);

    setTimeout(() => {
      expect(getByTestId('small-screen-drawer-test')).toBeInTheDocument();
    }, 300);

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: window.innerWidth,
    });
  });

  it('fetches user data and dispatches it to Redux', async () => {
    const dispatchMock = jest.fn();

    useDispatch.mockReturnValue(dispatchMock);

    const userData = jest.spyOn(
      require('../../utils/userData.api'),
      'getUserData'
    );

    render(<Navbar />);

    userData.mockResolvedValue({ name: 'name' });

    await waitFor(() => {
      expect(getUserData).toHaveBeenCalledTimes(1);
      expect(dispatchMock).toHaveBeenCalledWith({
        payload: undefined,
        type: 'userData/setUserData',
      });
    });
  });
});
