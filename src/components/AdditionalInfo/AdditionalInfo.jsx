import { Suspense } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { Link, Outlet } from 'react-router-dom';

export const AdditionalInfo = () => {
  return (
    <div>
      <b>Additional information: </b>

      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>

      <Suspense
        fallback={
          <div style={{ textAlign: 'center' }}>
            <InfinitySpin width="200" color="orange" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
