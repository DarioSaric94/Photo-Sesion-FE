import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './input';
import { act } from 'react-dom/test-utils';

describe('Input component', () => {
  it('renders without errors', () => {
    const { getByLabelText } = render(
      <form>
        <Input label="Test Label" name="testName" register={() => {}} />
      </form>
    );

    const inputElement = getByLabelText('Test Label');
    expect(inputElement).toBeInTheDocument();
  });

  it('does not display an error when required is true and a value is provided', async () => {
    const { getByLabelText, queryByText } = render(
      <form>
        <Input
          label="Test Label"
          name="testName"
          register={() => {}}
          required
        />
      </form>
    );

    const inputElement = getByLabelText('Test Label');
    fireEvent.change(inputElement, { target: { value: 'Test Value' } });

    await act(async () => {});

    const errorElement = queryByText('This field is required');
    expect(errorElement).toBeNull();
  });
});
