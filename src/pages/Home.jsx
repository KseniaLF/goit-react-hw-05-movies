import { getTrending } from 'api';
import { Header } from 'components/Header/Header';
import { TrendingList } from 'components/TrendingList/TrendingList';
import { useEffect, useState } from 'react';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTrending();
      // console.log(data);
      setTrending(data);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main>
      <Header />

      <TrendingList trending={trending} />
    </main>
  );
};

export default Home;
