import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { InfoIcon } from './infoIcon';
import { createTheme } from '@mui/material/styles';

describe('InfoIcon', () => {
  const theme = createTheme();
  it('renders InfoIcon component with text', () => {
    const text = 'Some Text';
    const { getByText } = render(<InfoIcon text={text} icon={<div />} />);

    expect(getByText(text)).toBeInTheDocument();
  });

  it('renders InfoIcon component with custom icon', () => {
    const customIcon = <span data-testid="custom-icon">Custom Icon</span>;
    const { getByTestId } = render(
      <InfoIcon text="Some Text" icon={customIcon} />
    );

    expect(getByTestId('custom-icon')).toBeInTheDocument();
  });

  it('applies hover styles when hovered over', () => {
    const text = 'Some Text';
    const { getByText } = render(<InfoIcon text={text} icon={<div />} />);

    const infoIcon = getByText(text);

    fireEvent.mouseEnter(infoIcon);

    expect(infoIcon).toHaveStyle({
      color: theme.palette.primary.light,
    });

    fireEvent.mouseLeave(infoIcon);

    expect(infoIcon).toHaveStyle({
      color: theme.palette.primary.light,
    });
  });
});
