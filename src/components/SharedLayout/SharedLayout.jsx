import { Suspense } from 'react';
import { Container, StyledLink } from 'components/App/App.styled';
import { Outlet } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';
import { Logo } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <header>
        <Logo to="/">movie</Logo>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          {/* <StyledLink to="/about">About</StyledLink> */}
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>

      <Suspense
        fallback={
          <div style={{ textAlign: 'center' }}>
            <InfinitySpin width="200" color="orange" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};
