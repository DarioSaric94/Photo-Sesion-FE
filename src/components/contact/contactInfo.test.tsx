import React from 'react';
import { render } from '@testing-library/react';
import { ContactInfo } from './contactInfo';
import { UserInfo } from '@/utils/types';
import * as redux from 'react-redux';

const mockUserInfo: UserInfo = {
  country: 'Country',
  city: 'City',
  domesticNumber: '123-456-789',
  iternationalCountry: 'Country',
  iternationalNumber: '+1-123-456-7890',
  email: 'example@example.com',
  facebookLink: 'https://www.facebook.com/example',
  instagramLink: 'https://www.instagram.com/example',
};

const mockUserInfoWithoutMedia: UserInfo = {
  country: 'Country',
  city: 'City',
  domesticNumber: '123-456-789',
  iternationalCountry: 'Country',
  iternationalNumber: '+1-123-456-7890',
  email: 'example@example.com',
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('ContactInfo', () => {
  const useSelectorMock = jest.spyOn(redux, 'useSelector');
  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it('renders ContactInfo component with data', () => {
    useSelectorMock.mockReturnValue(mockUserInfo);

    const { getByText } = render(<ContactInfo />);

    const dataFields = [
      'KONTAKT I DRUŠTVENE MREŽE',
      'PRONAĐITE NAS',
      'City, Country',
      '123-456-789',
      '+1-123-456-7890',
      'example@example.com',
      'Facebook',
      'Instagram',
    ];
    setTimeout(() => {
      dataFields.forEach((field) => {
        expect(getByText(field)).toBeInTheDocument();
      });
    }, 300);
  });

  it('renders ContactInfo component without social media links', () => {
    useSelectorMock.mockReturnValue(mockUserInfoWithoutMedia);

    const { getByText, queryByText } = render(<ContactInfo />);

    const dataFields = [
      'KONTAKT I DRUŠTVENE MREŽE',
      'PRONAĐITE NAS',
      'City, Country',
      '123-456-789',
      '+1-123-456-7890',
      'example@example.com',
    ];
    setTimeout(() => {
      dataFields.forEach((field) => {
        expect(getByText(field)).toBeInTheDocument();
      });
    }, 300);

    expect(queryByText('Facebook')).toBeNull();
    expect(queryByText('Instagram')).toBeNull();
  });
});
