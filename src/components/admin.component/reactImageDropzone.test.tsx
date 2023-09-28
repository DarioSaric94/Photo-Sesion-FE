import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ReactImageDropzone } from './reactImageDropzone';

describe('ReactImageDropzone', () => {
  it('renders the component with initial state', () => {
    const updateFiles = jest.fn();

    render(<ReactImageDropzone updateFiles={updateFiles} />);

    expect(screen.getByTestId('react-image-dropzone-test')).toBeInTheDocument();

    expect(
      screen.getByText('Kliknite ili povucite da biste odabrali fotografije.')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Ukupno Selektovanih Fotografija:')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Maksimalno Dozvoljeno za vaš paket 200')
    ).toBeInTheDocument();
  });
});
