import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SmallScreenNavbar } from './smallScreenNavbar';

describe('SmallScreenNavbar', () => {
  it('renders correctly', () => {
    const onClick = jest.fn();

    const { container } = render(<SmallScreenNavbar onClick={onClick} />);

    const menuIcon = container.querySelector('svg');
    expect(menuIcon).toBeInTheDocument();
  });

  it('calls onClick when the menu icon is clicked', () => {
    const onClick = jest.fn();

    const { container } = render(<SmallScreenNavbar onClick={onClick} />);

    const menuIcon = container.querySelector('svg') as SVGSVGElement;
    fireEvent.click(menuIcon);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
