import { getTrending } from 'api';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader';
import { TrendingList } from 'components/TrendingList/TrendingList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [trending, setTrending] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    const fetchData = async () => {
      const data = await getTrending(abortController);
      // console.log(data);
      setTrending(data);
      setIsLoading(false);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }

    return () => {
      // abortController.abort();
    };
  }, []);

  return (
    <main>
      <Header />
      {isLoading && <Loader />}
      <TrendingList trending={trending} />
    </main>
  );
};

export default Home;
