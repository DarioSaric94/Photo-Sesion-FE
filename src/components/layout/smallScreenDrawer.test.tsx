import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { SmallScreenDrawer } from './smallScreenDrawer';

jest.mock('next/router', () => ({
  push: jest.fn(),
}));

describe('SmallScreenDrawer', () => {
  it('renders correctly when openDrawer is true', () => {
    const openDrawer = true;
    const onClose = jest.fn();

    const { getByText, getByTestId } = render(
      <SmallScreenDrawer openDrawer={openDrawer} onClose={onClose} />
    );

    const smallScreenDrawer = getByTestId('small-screen-drawer-test');
    expect(smallScreenDrawer).toBeInTheDocument();

    const menuItems = [
      'POČETNA',
      'PORTFOLIO',
      'PRIVATNO',
      'FOTO PLUS',
      'USLUGE',
      'KONTAKT',
    ];
    menuItems.forEach((item) => {
      expect(getByText(item)).toBeInTheDocument();
    });
  });

  it('calls onClose(false) when the close button is clicked', async () => {
    const openDrawer = true;
    const onClose = jest.fn();

    const { getByText } = render(
      <SmallScreenDrawer openDrawer={openDrawer} onClose={onClose} />
    );

    await waitFor(() => {
      setTimeout(() => {
        const closeButton = getByText('X ZATVORI');
        fireEvent.click(closeButton);
        expect(onClose).toHaveBeenCalledWith(false);
      }, 300);
    });
  });

  it('navigates to the correct page when a menu item is clicked', () => {
    const openDrawer = true;
    const onClose = jest.fn();

    const { getByText } = render(
      <SmallScreenDrawer openDrawer={openDrawer} onClose={onClose} />
    );

    fireEvent.click(getByText('POČETNA'));

    expect(require('next/router').push).toHaveBeenCalledWith('/');
  });
});
