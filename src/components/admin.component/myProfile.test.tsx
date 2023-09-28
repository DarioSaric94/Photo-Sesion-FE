import React from 'react';
import { render, screen } from '@testing-library/react';
import { MyProfile } from './myProfile';
import * as redux from 'react-redux';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('MyProfile', () => {
  const useSelectorMock = jest.spyOn(redux, 'useSelector');

  it('renders My Profile button when isAdmin is 1', () => {
    useSelectorMock.mockReturnValue(1);

    render(<MyProfile />);

    expect(screen.getByText('My Profile')).toBeInTheDocument();
  });

  it('does not render My Profile button when isAdmin is not 1', () => {
    useSelectorMock.mockReturnValue(0);

    render(<MyProfile />);

    expect(screen.queryByText('My Profile')).not.toBeInTheDocument();
  });
});
