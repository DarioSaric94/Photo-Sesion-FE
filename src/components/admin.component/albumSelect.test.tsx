import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AlbumSelect } from './albumSelect';

const mockOnChange = jest.fn();

const sampleAlbumData = [{ id: 1, participants: 'Album 1' }];

describe('AlbumSelect', () => {
  it('renders the component with label and options', () => {
    const { getByText } = render(
      <AlbumSelect
        value={1}
        onChange={mockOnChange}
        albumData={sampleAlbumData}
        label="Select an album"
      />
    );

    expect(screen.getByTestId('album-select-test')).toBeInTheDocument();
    expect(getByText('Album 1')).toBeInTheDocument();
  });

  it('calls the onChange callback when an option is selected', () => {
    render(
      <AlbumSelect
        value={1}
        onChange={mockOnChange}
        albumData={sampleAlbumData}
        label="Select an album"
      />
    );

    const selectElement = screen.getByTestId('album-select-data-test');

    setTimeout(() => {
      fireEvent.select(selectElement, { target: { value: 1 } });
      expect(mockOnChange).toHaveBeenCalledWith(1);
    }, 300);
  });
});
