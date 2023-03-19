import { Loader } from 'components/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AddInfoBlock, StyledLink } from './AdditionalInfo.styled';

export const AdditionalInfo = () => {
  return (
    <div>
      <AddInfoBlock>
        <b>Additional information: </b>

        <StyledLink to="cast">Cast</StyledLink>
        <StyledLink to="reviews">Reviews</StyledLink>
      </AddInfoBlock>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
