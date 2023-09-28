import { render, screen } from '@testing-library/react';
import App from './_app';

jest.mock('react-redux', () => ({
  Provider: ({ children }: any) => children,
}));

jest.mock('@mui/system/ThemeProvider/ThemeProvider', () => ({
  __esModule: true,
  default: ({ children }: any) => children,
}));

jest.mock('../../src/components/layout/navbar', () => ({
  Navbar: () => <div>Mocked Navbar</div>,
}));

jest.mock('react-toastify', () => ({
  ToastContainer: () => <div>Mocked ToastContainer</div>,
}));

describe('App', () => {
  const mockRouter = jest.fn();

  it('renders Navbar', () => {
    render(
      <App Component={() => null} pageProps={{}} router={mockRouter} />
    );
    expect(screen.getByText('Mocked Navbar')).toBeInTheDocument();
  });

  it('renders ToastContainer', () => {
    render(<App Component={() => null} pageProps={{}} router={mockRouter} />);
    expect(screen.getByText('Mocked ToastContainer')).toBeInTheDocument();
  });

  it('renders Component if isClient is true', () => {
    render(
      <App router={mockRouter} Component={() => <div>Mocked Component</div>} pageProps={{}} />
    );
    expect(screen.getByText('Mocked Component')).toBeInTheDocument();
  });
});
