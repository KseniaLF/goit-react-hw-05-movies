import { InfinitySpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <InfinitySpin width="200" color="orange" />
    </div>
  );
};
