import * as redux from 'react-redux';
import { toast } from 'react-toastify';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Login from './login';

jest.mock('react-toastify');
jest.mock('../../utils/auth.api', () => ({
  signIn: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));


describe('login', () => {
  const useDispatch = jest.spyOn(redux, 'useDispatch');
  const useRouter = jest.spyOn(require('next/router'), 'useRouter');
  const pushMock = jest.fn();
  const mockDispatch = jest.fn();
  useDispatch.mockReturnValue(mockDispatch);
  const signInMock = jest.spyOn(require('../../utils/auth.api'), 'signIn');

  it('handles login with correct and incorrect data', async () => {
    useRouter.mockReturnValue({
      push: pushMock,
    });

    signInMock.mockResolvedValueOnce({
      statusCode: 200,
      message: 'Logged in successfully',
      userData: {},
    });

    render(<Login />);

    const email = screen.getByLabelText('Email address') as HTMLInputElement;
    const password = screen.getByLabelText('Password') as HTMLInputElement;

    const loginButton = screen.getByText('LOGIN');

    fireEvent.change(email, { target: { value: 'email' } });
    fireEvent.change(password, {
      target: { value: 'password' },
    });

    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith('/');
    });
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Logged in successfully');

    })

    jest.clearAllMocks();

    signInMock.mockResolvedValueOnce({
      statusCode: 401,
      message: 'Incorrect email or password',
      userData: {},
    });

    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(pushMock).not.toHaveBeenCalled();
    });
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Incorrect email or password');
    })
  });
});
