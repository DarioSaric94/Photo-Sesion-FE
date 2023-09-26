import { render, screen, fireEvent } from '@testing-library/react';
import { CustomButton } from './customButton';

describe('CustomButton component', () => {
  const onClick = jest.fn();

  it('renders correctly with text', () => {
    const buttonText = 'Click me';

    render(<CustomButton text={buttonText} onClick={onClick} />);

    const button = screen.getByTestId('custom-button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(buttonText);
  });

  it('calls onClick when clicked', () => {
    render(<CustomButton text="Click me" onClick={onClick} />);

    const button = screen.getByTestId('custom-button');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders as outlined', () => {
    render(
      <CustomButton text="Outlined" variant="outlined" onClick={onClick} />
    );

    const button = screen.getByTestId('custom-button');

    expect(button).toHaveClass('MuiButton-outlined');
  });

  it('renders as contained', () => {
    render(
      <CustomButton text="Contained" variant="contained" onClick={onClick} />
    );

    const button = screen.getByTestId('custom-button');

    expect(button).toHaveClass('MuiButton-contained');
  });

  it('renders as text', () => {
    render(<CustomButton text="Contained" variant="text" onClick={onClick} />);

    const button = screen.getByTestId('custom-button');

    expect(button).toHaveClass('MuiButton-text');
  });

  it('renders with fullWidth', () => {
    render(<CustomButton text="Full Width" fullWidth onClick={onClick} />);

    const button = screen.getByTestId('custom-button');

    expect(button).toHaveClass('MuiButton-fullWidth');
  });
});
