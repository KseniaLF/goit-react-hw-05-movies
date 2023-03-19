import { Suspense } from 'react';
import { Container, StyledLink } from 'components/App/App.styled';
import { Outlet } from 'react-router-dom';
import { Logo } from './SharedLayout.styled';
import { Loader } from 'components/Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <header>
        <Logo to="/">movie</Logo>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
