import { Link } from 'react-router-dom';
import { SearchBtn, Title } from './Header.styled';
import { BiSearchAlt } from 'react-icons/bi';

export const Header = () => {
  return (
    <>
      <Title>Trending today</Title>
      <SearchBtn>
        <Link to="/movies">
          {/* <button type="button">
            <b> Find next movie now </b> <BiSearchAlt />
          </button> */}

          <div>
            Find next movie now <BiSearchAlt />
          </div>
        </Link>
      </SearchBtn>
    </>
  );
};
