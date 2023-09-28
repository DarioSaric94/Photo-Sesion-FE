import { render, fireEvent, waitFor } from '@testing-library/react';
import ChangePassword from './change-password';
import * as redux from 'react-redux';
import { toast } from 'react-toastify';

jest.mock('react-toastify');
jest.mock('../../utils/auth.api', () => ({
  changePassword: jest.fn(() =>
    Promise.resolve({
      statusCode: 201,
      message: 'Password changed',
      userData: {},
    })
  ),
}));

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('ResetPassword', () => {
  const useDispatch = jest.spyOn(redux, 'useDispatch');
  const useRouter = jest.spyOn(require('next/router'), 'useRouter');
  const pushMock = jest.fn();
  const mockDispatch = jest.fn();
  useDispatch.mockReturnValue(mockDispatch);

  it('renders the ResetPassword component', async () => {
    useRouter.mockReturnValue({
      push: pushMock,
      query: { token: 'mock-token' },
    });

    const { getByLabelText, getByText } = render(<ChangePassword />);

    const newPasswordInput = getByLabelText('New Password') as HTMLInputElement;
    const confirmPasswordInput = getByLabelText(
      'Confirm New Password'
    ) as HTMLInputElement;
    const changePasswordButton = getByText('CHANGE PASSWORD');

    fireEvent.change(newPasswordInput, { target: { value: 'new-password' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'new-password' },
    });

    fireEvent.click(changePasswordButton);

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith('/');
      expect(toast.success).toHaveBeenCalledWith('Password changed');
    });
  });

  it('handles password mismatch', async () => {
    const { getByLabelText, getByText } = render(<ChangePassword />);

    const newPasswordInput = getByLabelText('New Password') as HTMLInputElement;
    const confirmPasswordInput = getByLabelText(
      'Confirm New Password'
    ) as HTMLInputElement;
    const changePasswordButton = getByText('CHANGE PASSWORD');

    fireEvent.change(newPasswordInput, { target: { value: 'new-password' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'wrong-password' },
    });

    fireEvent.click(changePasswordButton);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Passwords do not match');
    });
  });
});
