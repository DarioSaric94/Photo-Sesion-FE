import { render } from '@testing-library/react';
import { ListItem } from './listItem';

describe('listItem', () => {
  it('renders ListItem with provided data', () => {
    const item = 'Item 1';
    const title = 'Sample Title';
    const description = 'Sample Description';
    const image = 'sample-image.jpg';

    const { getByText, getByAltText } = render(
      <ListItem
        item={item}
        title={title}
        description={description}
        image={image}
      />
    );

    expect(getByText(item)).toBeInTheDocument();
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();

    const imageElement = getByAltText(image);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', image);
  });
});
