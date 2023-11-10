import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Private from './index';
import * as redux from 'react-redux';
import * as albumApi from '../../utils/album.api';
import { AlbumSesionRo } from '@/utils/types';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

jest.mock('../../utils/album.api', () => ({
  getAlbums: jest.fn(),
  deleteAlbum: jest.fn(),
}));

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

jest.mock('react-hook-form', () => ({
  useForm: jest.fn(() => ({
    handleSubmit: jest.fn((fn) => fn),
    register: jest.fn(),
    reset: jest.fn(),
  })),
}));

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/your/mock/pathname',
  }),
}));

const mockAlbumsData: AlbumSesionRo = {
  album: {
    id: 1,
    albumName: 'albumName',
    participants: 'participants',
    albumPath: 'albumPath',
    images: [],
  },
  status: 0,
};

describe('Private Component', () => {
  const useSelectorMock = jest.spyOn(redux, 'useSelector');
  const getAlbums = jest.spyOn(albumApi, 'getAlbums');
  const deleteAlbum = jest.spyOn(albumApi, 'deleteAlbum');

  beforeEach(() => {
    getAlbums.mockResolvedValue(mockAlbumsData);
  });
  it('renders without crashing', () => {
    render(<Private />);
  });

  it('renders addAlbum correctly when isAdmin is 1', async () => {
    render(<Private />);
    useSelectorMock.mockReturnValue(1);

    setTimeout(() => {
      expect(screen.getByTestId('add-album-test')).toBeInTheDocument();
    }, 300);

    useSelectorMock.mockReturnValue(0);

    expect(screen.queryByTestId('add-album-test')).not.toBeInTheDocument();
  });
});
