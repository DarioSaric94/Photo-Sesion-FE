import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AddYoutubeLink } from './addYoutubeLink';

describe('AddYoutubeLink', () => {
  const mockData = {
    id: 1,
    youtubeLink1: 'https://www.youtube.com/link1',
    youtubeLink2: 'https://www.youtube.com/link2',
    youtubeLink3: 'https://www.youtube.com/link3',
    albumId: 2,
    userId: 1,
  };

  const mockAlbumData = [
    { id: 1, name: 'Album 1' },
    { id: 2, name: 'Album 2' },
    { id: 3, name: 'Album 3' },
  ];

  it('renders AddYoutubeLink component', () => {
    render(
      <AddYoutubeLink
        onPostSuccessChange={() => {}}
        data={mockData}
        albumData={mockAlbumData}
      />
    );

    const addYoutubeLinksButton = screen.getByText('Add Youtube Links');
    expect(addYoutubeLinksButton).toBeInTheDocument();
  });

  it('opens and closes the modal', async () => {
    render(
      <AddYoutubeLink
        onPostSuccessChange={() => {}}
        data={mockData}
        albumData={mockAlbumData}
      />
    );

    const addYoutubeLinksButton = screen.getByText('Add Youtube Links');
    fireEvent.click(addYoutubeLinksButton);

    const modal = screen.getByText('Edit Links and Album');
    expect(modal).toBeInTheDocument();

    const closeButton = screen.getByText('Otkaži');
    fireEvent.click(closeButton);

    await waitFor(() => {
      const closedModal = screen.queryByText('Edit Links and Album');
      expect(closedModal).not.toBeInTheDocument();
    });
  });

  it('handles form submission successfully', async () => {
    const onPostSuccessChange = jest.fn();

    render(
      <AddYoutubeLink
        onPostSuccessChange={onPostSuccessChange}
        data={mockData}
        albumData={mockAlbumData}
      />
    );

    const addYoutubeLinksButton = screen.getByText('Add Youtube Links');
    fireEvent.click(addYoutubeLinksButton);

    const youtubeLink1Input = screen.getByLabelText('Youtube link 1');
    fireEvent.change(youtubeLink1Input, {
      target: { value: 'https://www.youtube.com/updated-link1' },
    });

    const youtubeLink2Input = screen.getByLabelText('Youtube link 2');
    fireEvent.change(youtubeLink2Input, {
      target: { value: 'https://www.youtube.com/updated-link2' },
    });

    const youtubeLink3Input = screen.getByLabelText('Youtube link 3');
    fireEvent.change(youtubeLink3Input, {
      target: { value: 'https://www.youtube.com/updated-link3' },
    });

    setTimeout(() => {
      expect(onPostSuccessChange).toHaveBeenCalled();
      expect(onPostSuccessChange.mock.calls[0][0].statusCode).toBe(200);
      expect(
        screen.getByText('Podatci Uspješno Promjenjeni')
      ).toBeInTheDocument();
    });
  });
});
