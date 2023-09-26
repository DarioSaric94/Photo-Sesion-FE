import { render } from '@testing-library/react';
import { Card } from './card';
import userEvent from '@testing-library/user-event';

describe('Card component', () => {
  it('renders children', () => {
    const { getByText } = render(
      <Card>
        <div>Card Content</div>
      </Card>
    );

    expect(getByText('Card Content')).toBeInTheDocument();
  });

  it('applies custom width', () => {
    const { getByTestId } = render(<Card width="300px" children={undefined} />);
    const card = getByTestId('card');

    expect(card).toHaveStyle('width: 300px');
  });

  it('applies hover effect', () => {
    const { getByTestId } = render(<Card hover children={undefined} />);
    const card = getByTestId('card');

    userEvent.hover(card);

    expect(card).toHaveClass('shadow scale MuiBox-root css-qnfsek');
  });

  it('applies custom background color', () => {
    const { getByTestId } = render(
      <Card bgColor="blue" children={undefined} />
    );
    const card = getByTestId('card');

    expect(card).toHaveStyle('background-color: blue');
  });

  it('applies custom padding', () => {
    const { getByTestId } = render(<Card p={2} children={undefined} />);
    const card = getByTestId('card');

    expect(card).toHaveStyle('padding: 16px');
  });
});
