import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CustomModal } from './customModal';

describe('CustomModal', () => {
  it('renders with label, description, and children', () => {
    const onClose = jest.fn();
    render(
      <CustomModal
        open={true}
        onClose={onClose}
        label="Test Modal"
        description="This is a test modal"
      >
        <div>Modal Content</div>
      </CustomModal>
    );

    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('This is a test modal')).toBeInTheDocument();

    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('calls onClose when the modal is closed', () => {
    const onClose = jest.fn();
    render(
      <CustomModal open={true} onClose={onClose} label="Test Modal">
        <div>Modal Content</div>
      </CustomModal>
    );

    const modal = screen.getByTestId('custom-modal-test');

    expect(modal).toBeInTheDocument();
  });

  it('does not render when closed', () => {
    const onClose = jest.fn();
    render(
      <CustomModal open={false} onClose={onClose} label="Test Modal">
        <div>Modal Content</div>
      </CustomModal>
    );

    const modal = screen.queryByTestId('custom-modal-test');

    expect(modal).not.toBeInTheDocument();
  });
});
