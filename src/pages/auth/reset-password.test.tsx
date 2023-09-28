import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ResetPassword from './reset-password';
import { toast } from 'react-toastify';
import { resetPassword } from '../../utils/auth.api';
import { useRouter } from 'next/router';

jest.mock('react-toastify');
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));
jest.mock('../../utils/auth.api', () => ({
  resetPassword: jest.fn(() =>
    Promise.resolve({
      statusCode: 200,
      message: 'Success message',
    })
  ),

}));

describe('ResetPassword', () => {
  const resetPasswordMock = resetPassword as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the ResetPassword component', async () => {
    render(<ResetPassword />);
    const emailInput = screen.getByLabelText(
      'Email address'
    ) as HTMLInputElement;
    const sendInstructionsButton = screen.getByText('SEND INSTRUCTIONS');

    fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } });
    fireEvent.click(sendInstructionsButton);

    await waitFor(() => {
      expect(resetPasswordMock).toHaveBeenCalledWith('test@gmail.com');
    });

    await waitFor(() => {
      expect(toast.error).not.toHaveBeenCalled();

    })
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalledWith('Success message');
    })


  });

  it('handles reset password failure', async () => {
    resetPasswordMock.mockResolvedValueOnce({
      statusCode: 400,
      message: 'Invalid email',
    });

    render(<ResetPassword />);
    const emailInput = screen.getByLabelText(
      'Email address'
    ) as HTMLInputElement;
    const sendInstructionsButton = screen.getByText('SEND INSTRUCTIONS');

    fireEvent.change(emailInput, { target: { value: 'invalid@example.com' } });
    fireEvent.click(sendInstructionsButton);

    await waitFor(() => {
      expect(resetPasswordMock).toHaveBeenCalledWith('invalid@example.com');
    });

    await waitFor(() => {
      expect(toast.success).not.toHaveBeenCalled();
    })

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith('Invalid email');
    })
  });
});
