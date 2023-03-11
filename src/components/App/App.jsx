import { About } from 'pages/About/About';
import { Home } from 'pages/Home/Home';
import { NotFound } from 'pages/NotFound/NotFound';
import { ProductDetails } from 'pages/ProductDetails/ProductDetails';
import { Products } from 'pages/Products/Products';
import { Routes, Route } from 'react-router-dom';
import { Container, StyledLink } from './App.styled';

export const App = () => {
  return (
    <Container>
      <header>
        <span>🎃</span>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
