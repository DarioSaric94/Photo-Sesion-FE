import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CustomDrawer } from './customDrawer';
import * as redux from 'react-redux';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/mocked-path',
  }),
}));

const mockUserData = {
  name: 'name',
  lastName: 'lastName',
  email: 'namelastName@gmail.com',
  image: 'profile.jpg',
};

describe('CustomDrawer', () => {
  const onCloseMock = jest.fn();
  const useSelectorMock = jest.spyOn(redux, 'useSelector');

  beforeEach(() => {
    useSelectorMock.mockReturnValue(mockUserData);
  });

  it('renders CustomDrawer with user data', () => {
    const { getByAltText } = render(
      <CustomDrawer openDrawer={true} onClose={() => {}} />
    );

    expect(screen.getByText('name lastName')).toBeInTheDocument();
    expect(screen.getByText('KONTAKT')).toBeInTheDocument();
    expect(screen.getByText('namelastName@gmail.com')).toBeInTheDocument();

    const imageElement = getByAltText(mockUserData.email);
    expect(imageElement).toHaveAttribute('src', mockUserData.image);
  });

  it('calls onClose when the X button is clicked', () => {
    render(<CustomDrawer openDrawer={true} onClose={onCloseMock} />);

    fireEvent.click(screen.getByText('X'));

    expect(onCloseMock).toHaveBeenCalledWith(false);
  });

  it('doesnt display content when openDrawer is false', () => {
    render(<CustomDrawer openDrawer={false} onClose={() => {}} />);

    expect(screen.queryByText('name lastName')).not.toBeInTheDocument();
    expect(screen.queryByText('KONTAKT')).not.toBeInTheDocument();
  });
});
