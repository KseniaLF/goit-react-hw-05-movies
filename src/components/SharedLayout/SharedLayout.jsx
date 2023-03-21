import { Suspense } from 'react';
import { Container, StyledLink } from 'components/App/App.styled';
import { Outlet } from 'react-router-dom';
import { Logo } from './SharedLayout.styled';
import { Loader } from 'components/Loader';
import { Footer } from 'components/Footer/Footer';

export const SharedLayout = () => {
  return (
    <Container>
      <div>
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
      </div>

      <Footer />
    </Container>
  );
};
