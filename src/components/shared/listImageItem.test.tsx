import { render } from '@testing-library/react';
import { ListImageItem } from './listImageItem';

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/mocked-path',
  }),
}));

describe('ListImageItem', () => {
  it('renders ListImageItem without errors', () => {
    const { getByTestId } = render(<ListImageItem src="test-image.jpg" />);

    const imageItem = getByTestId('list-image-item-test');

    expect(imageItem).toBeInTheDocument();
  });

  it('changes aspect ratio based on src', () => {
    const { getByTestId } = render(<ListImageItem src="/images/cat.jpg" />);

    const imageItem = getByTestId('list-image-item-aspect-ratio-test');

    expect(imageItem).toHaveClass('MuiBox-root css-1g8qg50');
    expect(imageItem).toBeInTheDocument();
  });
});
