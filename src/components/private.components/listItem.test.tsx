import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ListItem } from './listItem';
import * as redux from 'react-redux';

const mockAlbum = {
  id: 1,
  albumName: 'albumName',
  participants: 'participants',
  albumPath: 'albumPath',
  images: [{ id: 1, albumSesionId: 1, image: 'image.jpg' }],
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/mocked-path',
  }),
}));
const onDeleteMock = jest.fn();

describe('ListItem', () => {
  const useSelectorMock = jest.spyOn(redux, 'useSelector');

  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it('renders ListItem with provided album data', () => {
    const onDeleteMock = jest.fn();
    const { getByText, getByAltText } = render(
      <ListItem album={mockAlbum} onDelete={onDeleteMock} />
    );

    expect(getByAltText('image.jpg')).toBeInTheDocument();
    expect(getByText('participants')).toBeInTheDocument();

    const imageElement = getByAltText('image.jpg');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'image.jpg');
  });

  it('clicking on ListItem navigates to album details', () => {
    useSelectorMock.mockReturnValue(1);

    render(<ListItem album={mockAlbum} onDelete={onDeleteMock} />);

    const listItem = screen.getByTestId('delete-icon-test');
    fireEvent.click(listItem);

    expect(onDeleteMock).toHaveBeenCalled();
  });

  it('renders ListItem with provided album data and no DeleteIcon when isAdmin is not 1', () => {
    useSelectorMock.mockReturnValue(0);

    const { getByText, getByAltText, queryByTestId } = render(
      <ListItem album={mockAlbum} onDelete={onDeleteMock} />
    );

    const deleteIcon = queryByTestId('delete-icon-test');
    expect(deleteIcon).not.toBeInTheDocument();

    expect(getByAltText('image.jpg')).toBeInTheDocument();
    expect(getByText('participants')).toBeInTheDocument();

    const imageElement = getByAltText('image.jpg');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'image.jpg');
  });
});
