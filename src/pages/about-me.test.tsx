import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMe from './about-me';

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/your/mock/pathname',
  }),
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));


describe('AboutMe Component', () => {
  it('renders without crashing', () => {
    render(<AboutMe />);
  });

  it('displays the main title', () => {
    render(<AboutMe />);
    const title = screen.getByText('POZDRAV');
    expect(title).toBeInTheDocument();
  });

  it('displays the images', () => {
    render(<AboutMe />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(6);
  });

  it('displays the studio section title', () => {
    render(<AboutMe />);
    const studioTitle = screen.getByText('FOTO I VIDEO OPREMA');
    expect(studioTitle).toBeInTheDocument();
  });

  it('displays the studio section description', () => {
    render(<AboutMe />);
    const studioDescription = screen.getByText(
      'Foto Miškić trenutno raspolaže sa najsavremenijom opremom kako za snimanje tako i za fotografsanje dogadjaja. Naše kamere dostizu 4K rezoluciju.'
    );
    expect(studioDescription).toBeInTheDocument();
  });

  it('displays the image editing section title', () => {
    render(<AboutMe />);
    const editingTitle = screen.getByText('UREĐIVANJE FOTOGRAFIJA');
    expect(editingTitle).toBeInTheDocument();
  });

  it('displays the image editing section description', () => {
    render(<AboutMe />);
    const editingDescription = screen.getByText(
      'Svaku fotografiju obradimo softverski da dobije najbolji sjaj.'
    );
    expect(editingDescription).toBeInTheDocument();
  });
});
