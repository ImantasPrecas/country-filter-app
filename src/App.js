import Header from './components/Header';
import FilterContainer from './components/Filter/FilterContainer';
import CountriesList from './components/CountriesList';
import { useEffect, useState } from 'react';

const DUMMY_DATA = [
  { name: 'Bosnia and Herzegovina', region: 'Europe', area: 51209.0, independent: false },
  { name: 'Botswana', region: 'Africa', area: 582000.0, independent: false },
  { name: 'Bouvet Island', region: 'Antarctic Ocean', area: 49.0, independent: false },
  { name: 'Equatorial Guinea', region: 'Africa', area: 28051.0, independent: false },
];

function App() {
  const [ascending, setAcsending] = useState(true);
  const [region, setRegion] = useState('');
  const [area, setArea] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const orderChangeHandler = (e) => {
    setAcsending(e.target.value === 'ascending');
  };

  const regionChangeHandler = (e) => {
    setRegion(e.target.value);
  };

  const areaChangeHandler = (e) => {
    setArea(e.target.value);
    console.log(area);
  };

  const filterByOrder = (DUMMY_DATA) => {
    const strAscending = [...DUMMY_DATA].sort((a, b) => (a.name > b.name ? 1 : -1));
    const strDescending = [...DUMMY_DATA].sort((a, b) => (a.name > b.name ? -1 : 1));
    return ascending ? strAscending : strDescending;
  };

  const filteredByRegion = (DUMMY_DATA) => {
    return region === 'default'
      ? DUMMY_DATA
      : DUMMY_DATA.filter((item) => item.region.toLowerCase().includes(region));
  };

  const filterByArea = (DUMMY_DATA) => {
    return !area ? DUMMY_DATA : DUMMY_DATA.filter((item) => item.area < area);
  };

  useEffect(() => {
    let data = DUMMY_DATA;
    data = filteredByRegion(data);
    data = filterByOrder(data);
    data = filterByArea(data);
    setFilteredData(data);
    console.log(filteredData);

    // eslint-disable-next-line
  }, [region, ascending, area]);

  return (
    <div className='bg-gradient-to-tr from-gray-700 via-gray-800 to-gray-900 h-screen px-6'>
      <Header />
      <FilterContainer
        onOrderChange={orderChangeHandler}
        onRegionChange={regionChangeHandler}
        onAreaChange={areaChangeHandler}
      />
      <CountriesList list={filteredData} />
    </div>
  );
}

export default App;
