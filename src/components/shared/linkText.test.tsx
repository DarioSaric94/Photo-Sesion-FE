import { render, screen, fireEvent } from '@testing-library/react';
import { LinkText } from './linkText';

describe('LinkText component', () => {
  const onClick = jest.fn();
  it('renders correctly with text', () => {
    const text = 'text';

    render(<LinkText link="text" onClick={onClick} />);

    const linkText = screen.getByTestId('link-text-test');

    expect(linkText).toBeInTheDocument();
    expect(linkText).toHaveTextContent(text);
  });

  it('calls onClick when clicked', () => {
    const text = 'text';

    render(<LinkText link="text" onClick={onClick} />);

    const linkText = screen.getByTestId('link-text-test');

    fireEvent.click(linkText);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
