import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { DownloadAlbum } from './downloadAlbum';

jest.mock('../../utils/imageFile.api', () => ({
  getImageFile: jest.fn().mockResolvedValue({
    statusCode: 200,
    url: 'mocked-url',
    sessionToken: 'mocked-token',
  }),
}));
jest.mock('react-toastify', () => ({
  toast: {
    warning: jest.fn(),
  },
}));

describe('DownloadAlbum', () => {
  const sampleAlbumData = {
    id: 1,
    albumName: 'Sample Album',
    participants: 'Participant 1',
    albumPath: '/sample/path',
    albumPassword: 'password123',
    mainVideo: 'main-video.mp4',
    trailerVideo: 'trailer-video.mp4',
    images: [],
  };

  it('renders the DownloadAlbum component', () => {
    render(<DownloadAlbum albumData={sampleAlbumData} />);

    expect(screen.getByText('Download Album')).toBeInTheDocument();
  });

  it('opens and closes the modal when the "Download Album" button is clicked and canceled', async () => {
    render(<DownloadAlbum albumData={sampleAlbumData} />);

    fireEvent.click(screen.getByText('Download Album'));
    fireEvent.click(screen.getByText('Otkaži'));

    await waitFor(() => {
      expect(
        screen.queryByText('Unesite Lozinku Albuma')
      ).not.toBeInTheDocument();
    });
  });

  it('calls handleDownloadAlbum when the "Download" button is clicked', async () => {
    render(<DownloadAlbum albumData={sampleAlbumData} />);

    fireEvent.click(screen.getByText('Download Album'));

    fireEvent.change(screen.getByLabelText('Unesite Lozinku Albuma'), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByText('Download'));

    await waitFor(() => {
      expect(
        screen.queryByText('Unesite Lozinku Albuma')
      ).not.toBeInTheDocument();
    });
  });
});
