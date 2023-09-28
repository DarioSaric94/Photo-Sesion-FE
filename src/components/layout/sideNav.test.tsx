import React from 'react';
import { render } from '@testing-library/react';
import { SideNav } from './sideNav';
import { createTheme } from '@mui/material/styles';

describe('SideNav', () => {
  const theme = createTheme();

  it('renders detailText and pageText correctly', () => {
    const detailText = 'DETAIL';
    const pageText = 'PAGE';

    const { getByText } = render(
      <SideNav detailText={detailText} pageText={pageText} />
    );

    const detailTextElement = getByText(detailText);
    const pageTextElement = getByText(pageText);

    expect(detailTextElement).toBeInTheDocument();
    expect(pageTextElement).toBeInTheDocument();
  });

  it('renders the correct styles', () => {
    const detailText = 'DETAIL';
    const pageText = 'PAGE';

    const { getByText } = render(
      <SideNav detailText={detailText} pageText={pageText} />
    );

    const detailTextElement = getByText(detailText);
    const pageTextElement = getByText(pageText);

    expect(detailTextElement).toHaveStyle({
      transform: 'rotate(-90deg)',
      color: theme.palette.primary.main,
      maxWidth: '50px',
    });

    expect(pageTextElement).toHaveStyle({
      transform: 'rotate(-90deg)',
      color: theme.palette.primary.main,
      maxWidth: '50px',
    });
  });
});
