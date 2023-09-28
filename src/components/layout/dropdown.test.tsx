import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DropDown } from './dropdown';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('DropDown', () => {
  const mockRouterPush = jest.fn();
  it('renders the Dropdown with a menu and navigates to routes', () => {
    useRouter.mockReturnValue({ push: mockRouterPush });

    render(<DropDown leaveMouse={() => {}} display="block" />);

    const fotoPlusText = screen.getByText('FOTO PLUS');
    expect(fotoPlusText).toBeInTheDocument();

    fireEvent.click(fotoPlusText);

    const drveneKutijeMenuItem = screen.getByText('DRVENE KUTIJE');
    const fotoZahvalniceMenuItem = screen.getByText('FOTO ZAHVALNICE');

    expect(drveneKutijeMenuItem).toBeInTheDocument();
    expect(fotoZahvalniceMenuItem).toBeInTheDocument();

    fireEvent.click(drveneKutijeMenuItem);
    expect(mockRouterPush).toHaveBeenCalledWith('/wooden-boxes');

    fireEvent.click(fotoZahvalniceMenuItem);
    expect(mockRouterPush).toHaveBeenCalledWith('/photo-card');
  });

  it('closes the Dropdown menu on mouse leave', () => {
    render(<DropDown leaveMouse={() => {}} display="block" />);

    const fotoPlusText = screen.getByText('FOTO PLUS');

    fireEvent.click(fotoPlusText);

    const drveneKutijeMenuItem = screen.getByText('DRVENE KUTIJE');

    expect(drveneKutijeMenuItem).toBeInTheDocument();

    const menu = screen.getByTestId('menu-test');

    expect(menu).toBeInTheDocument();

    fireEvent.mouseLeave(menu);

    setTimeout(() => {
      expect(drveneKutijeMenuItem).not.toBeInTheDocument();
    }, 1000);
  });
});
