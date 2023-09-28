import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { AddImage } from './addImage';

describe('AddImage', () => {
  it('renders with an initial image', async () => {
    const image = 'https://example.com/image.jpg';
    const { getByTestId } = render(
      <AddImage onImageChange={() => {}} image={image} htmlFor="image-input" />
    );

    const avatar = getByTestId('avatar-test');
    expect(avatar).toBeInTheDocument();

    setTimeout(() => {
      expect(avatar).toHaveAttribute('src', image);
    }, 300);
  });

  it('handles image change when a new image is selected', async () => {
    const onImageChange = jest.fn();
    render(<AddImage onImageChange={onImageChange} htmlFor="image-input" />);

    const input = screen.getByTestId('image-file-input-test');
    const newImage = 'data:image/jpeg;base64,base64encodedimage';

    fireEvent.change(input, { target: { files: [new File([], 'image.jpg')] } });

    const avatar = screen.getByTestId('avatar-test');
    setTimeout(() => {
      expect(onImageChange).toHaveBeenCalledWith(expect.any(File));
      expect(avatar).toHaveAttribute('src', newImage);
    }, 300);
  });
});
