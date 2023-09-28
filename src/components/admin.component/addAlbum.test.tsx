import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { AddAlbum } from './addAlbum';
import { postAlbum } from '../../utils/album.api';
import { toast } from 'react-toastify';
import * as fetchModule from '../../utils/fetch';

jest.mock('../../utils/fetch');
jest.mock('react-toastify', () => ({
  toast: {
    warning: jest.fn(),
    success: jest.fn(),
    error: jest.fn(),
  },
}));

const postAlbumMock = jest.spyOn(fetchModule, 'POST');

describe('AddAlbum', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const onPostSuccess = jest.fn();

  it('renders AddAlbum component and handles form submission successfully', async () => {
    postAlbumMock.mockResolvedValue({
      statusCode: 201,
      message: 'Album Postavljen Uspješno',
    });

    const { getByLabelText, getByText, getByTestId } = render(
      <AddAlbum onPostSuccess={onPostSuccess} />
    );

    fireEvent.click(getByText('Dodajte Album'));

    fireEvent.change(getByLabelText('Naziv Albuma'), {
      target: { value: 'My Album' },
    });
    fireEvent.change(getByLabelText('Ime Vlasnika Albuma (Korisnika)'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(getByLabelText('Lozinka Albuma'), {
      target: { value: 'password123' },
    });

    const imageFile = new File(['image'], 'image.jpg', { type: 'image/jpeg' });
    fireEvent.change(getByTestId('react-image-dropzone-test'), {
      target: { files: [imageFile] },
    });

    fireEvent.click(getByText('Sačuvaj Promjene'));

    await waitFor(() => {
      setTimeout(() => {
        expect(postAlbum).toHaveBeenCalledWith(expect.any(FormData));
        expect(toast.success).toHaveBeenCalledWith('Album Postavljen Uspješno');
      }, 300);
    });
  });

  it('handles form submission with validation errors', async () => {
    const { getByText } = render(<AddAlbum onPostSuccess={onPostSuccess} />);

    fireEvent.click(getByText('Dodajte Album'));
    fireEvent.click(getByText('Sačuvaj Promjene'));

    await waitFor(() => {
      setTimeout(() => {
        expect(toast.warning).toHaveBeenCalledWith(
          'Ime vlasnika albuma ne smije biti krace od 3 karaktera!'
        );
        expect(toast.warning).toHaveBeenCalledWith(
          'Nazim albuma ne smije biti kraci od 3 karaktera!'
        );

        expect(toast.warning).toHaveBeenCalledWith(
          'Lozinka ne smije biti kraca od 8 karaktera!'
        );
        expect(toast.warning).toHaveBeenCalledWith(
          'Morate postaviti bar jednu fotografiju'
        );
      }, 300);
    });
  });

  it('handles form submission with API error', async () => {
    postAlbumMock.mockResolvedValue({
      statusCode: 500,
      error: 'Internal Server Error',
    });

    const { getByLabelText, getByText } = render(
      <AddAlbum onPostSuccess={onPostSuccess} />
    );

    fireEvent.click(getByText('Dodajte Album'));

    fireEvent.change(getByLabelText('Naziv Albuma'), {
      target: { value: 'My Album' },
    });
    fireEvent.change(getByLabelText('Ime Vlasnika Albuma (Korisnika)'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(getByLabelText('Lozinka Albuma'), {
      target: { value: 'password123' },
    });

    fireEvent.click(getByText('Sačuvaj Promjene'));

    await waitFor(() => {
      setTimeout(() => {
        expect(postAlbum).toHaveBeenCalledWith(expect.any(FormData));

        expect(toast.error).toHaveBeenCalledWith('Internal Server Error');
      }, 300);
    });
  });
});
