import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NavbarLink } from './navbarLink';
import { createTheme } from '@mui/material/styles';

describe('NavbarLink', () => {
  const theme = createTheme();
  it('renders the link text', () => {
    const linkText = 'Home';

    const { getByText } = render(
      <NavbarLink link={linkText} onClick={() => {}} />
    );

    const linkElement = getByText(linkText);
    expect(linkElement).toBeInTheDocument();
  });

  it('calls the onClick function when clicked', () => {
    const onClickMock = jest.fn();

    const { getByText } = render(
      <NavbarLink link="Link" onClick={onClickMock} />
    );

    const linkElement = getByText('Link');

    fireEvent.click(linkElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('applies hover styles when hovered', () => {
    const { getByText } = render(<NavbarLink link="Link" onClick={() => {}} />);

    const linkElement = getByText('Link');

    fireEvent.mouseEnter(linkElement);

    expect(linkElement).toHaveStyle({
      color: theme.palette.primary.light,
    });

    fireEvent.mouseLeave(linkElement);

    expect(linkElement).toHaveStyle({
      color: theme.palette.primary.light,
    });
  });
});
