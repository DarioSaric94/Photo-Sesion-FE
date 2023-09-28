import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DeleteIcon } from './deleteIcon';

describe('DeleteIcon', () => {
  it('renders the DeleteIcon component', () => {
    render(<DeleteIcon onClick={() => {}} />);

    const deleteIcon = screen.getByTestId('delete-icon-test');

    expect(deleteIcon).toBeInTheDocument();
  });

  it('calls the onClick callback when clicked', () => {
    const mockOnClick = jest.fn();
    render(<DeleteIcon onClick={mockOnClick} />);

    const deleteIcon = screen.getByTestId('delete-icon-test');

    fireEvent.click(deleteIcon);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
