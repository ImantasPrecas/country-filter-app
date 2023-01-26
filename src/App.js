import Header from './components/Header';
import FilterContainer from './components/Filter/FilterContainer';
import CountriesList from './components/CountriesList';

import { useEffect, useState } from 'react';
import { getCountries } from './api/api';

function App() {
  const [ascending, setAcsending] = useState(true);
  const [region, setRegion] = useState('');
  const [area, setArea] = useState(null);

  const [filteredData, setFilteredData] = useState([]);
  const [countries, setCountries] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let ignore = false;

    const loadCountryList = async () => {
      setIsLoading(true);

      try {
        const response = await getCountries();

        if (!ignore) {
          setCountries(response);
        }

        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    loadCountryList();

    return () => {
      ignore = true;
    };
  }, []);

  const orderChangeHandler = (e) => {
    setAcsending(e.target.value === 'ascending');
  };

  const regionChangeHandler = (e) => {
    setRegion(e.target.value);
  };

  const areaChangeHandler = (e) => {
    setArea(e.target.value);
  };

  const filterByOrder = (countries) => {
    const strAscending = [...countries].sort((a, b) => (a.name > b.name ? 1 : -1));
    const strDescending = [...countries].sort((a, b) => (a.name > b.name ? -1 : 1));
    return ascending ? strAscending : strDescending;
  };

  const filteredByRegion = (countries) => {
    return region === 'default'
      ? countries
      : countries.filter((item) => item.region.includes(region));
  };

  const filterByArea = (countries) => {
    return !area ? countries : countries.filter((item) => item.area < area);
  };

  useEffect(() => {
    let data = countries;

    data = filteredByRegion(data);
    data = filterByOrder(data);
    data = filterByArea(data);

    setFilteredData(data);

    return () => {
      data = [];
    };

    // eslint-disable-next-line
  }, [region, ascending, area, countries]);

  return (
    <>
      <Header />
      <FilterContainer
        onOrderChange={orderChangeHandler}
        onRegionChange={regionChangeHandler}
        onAreaChange={areaChangeHandler}
      />
      {isLoading && !error && <p className='text-white text-xl'>Loading... </p>}
      {error && (
        <p className='text-white text-xl'>Something went wrong, {error.message}</p>
      )}
      {filteredData.length > 0 && <CountriesList list={filteredData} />}
    </>
  );
}

export default App;
