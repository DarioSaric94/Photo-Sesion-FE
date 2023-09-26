import { render, screen, fireEvent } from '@testing-library/react';
import { HoverAnimatedText } from './hoverAnimatedText';

describe('HoverAnimatedText', () => {
  const onClick = jest.fn();
  it('renders correctly with text', () => {
    const text = 'text';

    render(<HoverAnimatedText text="text" onClick={onClick} />);

    const animatedText = screen.getByTestId('hover-animated-text-text');

    expect(animatedText).toBeInTheDocument();
    expect(animatedText).toHaveTextContent(text);
  });

  it('calls onClick when clicked on text', () => {
    render(<HoverAnimatedText text="text" onClick={onClick} />);

    const animatedText = screen.getByTestId('hover-animated-text-text');

    fireEvent.click(animatedText);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('calls onClick when clicked on icon', () => {
    render(<HoverAnimatedText text="text" onClick={onClick} />);

    const animatedText = screen.getByTestId('hover-animated-text-icon');

    fireEvent.click(animatedText);
    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
