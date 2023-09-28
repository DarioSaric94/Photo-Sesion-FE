import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { ContactApps } from './contactApps';
import * as nextRouter from 'next/router';

const useRouterMock = nextRouter.useRouter as jest.Mock;

useRouterMock.mockReturnValue({
  push: jest.fn(),
});
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const mockData = {
  facebookLink: 'https://www.facebook.com/example',
  instagramLink: 'https://www.instagram.com/example',
};

describe('ContactApps', () => {
  it('renders correctly with Facebook and Instagram links', () => {
    const { getByText, getByTestId } = render(
      <ContactApps data={mockData} icon={<div data-testid="icon" />} />
    );

    const contactApps = getByTestId('contact-apps-test');
    expect(contactApps).toBeInTheDocument();

    expect(getByText('Facebook')).toBeInTheDocument();
    expect(getByText('Instagram')).toBeInTheDocument();
  });

  it('calls router.push when Facebook link is clicked', async () => {
    const { getByText } = render(
      <ContactApps data={mockData} icon={<div data-testid="icon" />} />
    );

    const facebookLink = getByText('Facebook');
    fireEvent.click(facebookLink);

    await waitFor(() => {
      expect(useRouterMock().push).toHaveBeenCalledWith(mockData.facebookLink);
    });
  });

  it('calls router.push when Instagram link is clicked', () => {
    const { getByText } = render(
      <ContactApps data={mockData} icon={<div data-testid="icon" />} />
    );

    const instagramLink = getByText('Instagram');
    fireEvent.click(instagramLink);

    expect(useRouterMock().push).toHaveBeenCalledWith(mockData.instagramLink);
  });
});
