import React from 'react';
import { render, screen } from '@testing-library/react';
import { Container } from './container';
import * as nextRouter from 'next/router';
import { PageTexts } from '@/helpers/pageProps';
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const mockPageTexts: Record<string, PageTexts> = {
  '/path1': {
    detailText: 'Detail 1',
    pageText: 'Page 1',
    text1: 'Text 1',
    text2: 'Text 2',
  },
  '/path2': {
    detailText: 'Detail 2',
    pageText: 'Page 2',
    text1: 'Text 3',
    text2: 'Text 4',
  },
};
jest.mock('./sideNav', () => ({
  SideNav: () => <div data-testid="sidenav" />,
}));
jest.mock('./scrollToTop', () => ({
  ScrollToTop: () => <div data-testid="scrolltotop" />,
}));
jest.mock('./footer', () => ({
  Footer: () => <div data-testid="footer" />,
}));
jest.mock('../admin.component/myProfile', () => ({
  MyProfile: () => <div data-testid="myprofile" />,
}));
jest.mock('../../helpers/pageProps', () => ({
  getPageTexts: jest.fn((pathname) => mockPageTexts[pathname] || {}),
}));

describe('Container', () => {
  const useRouterMock = nextRouter.useRouter as jest.Mock;

  beforeEach(() => {
    useRouterMock.mockReturnValue({
      pathname: '/path1',
    });
  });

  it('renders children and displays page content', () => {
    const { getByText } = render(
      <Container>
        <div data-testid="child-element">Child Element</div>
      </Container>
    );

    const childElement = getByText('Child Element');
    expect(childElement).toBeInTheDocument();
  });

  it('displays different content based on the router pathname', () => {
    useRouterMock.mockReturnValue({
      pathname: '/path2',
    });

    const { getByText } = render(
      <Container>
        <div data-testid="child-element">Child Element</div>
      </Container>
    );

    const childElement = getByText('Child Element');
    expect(childElement).toBeInTheDocument();
  });

  it('expects sidenav/ScrollToTop/FooterMyProfile to be in container', () => {
    render(
      <Container>
        <div data-testid="child-element">Child Element</div>
      </Container>
    );

    const sideNav = screen.getByTestId('sidenav');
    const scrollToTop = screen.getByTestId('scrolltotop');
    const footer = screen.getByTestId('footer');
    const myProfile = screen.getByTestId('myprofile');

    expect(sideNav).toBeInTheDocument();
    expect(scrollToTop).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(myProfile).toBeInTheDocument();
  });
});
