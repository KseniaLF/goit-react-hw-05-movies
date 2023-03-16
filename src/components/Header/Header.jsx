import { Link } from 'react-router-dom';
import { SearchBtn, Title } from './Header.styled';
import { BiSearchAlt } from 'react-icons/bi';

export const Header = () => {
  return (
    <>
      <SearchBtn>
        <Link to="/movies">
          <button type="button">
            <b> Find next movie now </b> <BiSearchAlt />
          </button>
        </Link>
      </SearchBtn>

      <Title>Trending today</Title>
    </>
  );
};
