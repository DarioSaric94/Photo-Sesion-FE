import React from 'react';
import { render } from '@testing-library/react';
import { YoutubeVideo } from './youtubeVideo';

describe('YoutubeVideo', () => {
  it('renders an iframe with the provided src', () => {
    const videoSrc = 'https://www.youtube.com/embed/video-id';
    const { container } = render(<YoutubeVideo src={videoSrc} />);

    const iframeElement = container.querySelector('iframe');

    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute('src', videoSrc);
    expect(iframeElement).toHaveAttribute('allowFullScreen');
  });
});
