import Header from './components/Header';
import FilterContainer from './components/Filter/FilterContainer';
import CountriesList from './components/CountriesList';
import { useState } from 'react';

const DUMMY_DATA = [
  { name: 'Bosnia and Herzegovina', region: 'Europe', area: 51209.0, independent: false },
  { name: 'Botswana', region: 'Africa', area: 582000.0, independent: false },
  { name: 'Bouvet Island', region: 'Antarctic Ocean', area: 49.0, independent: false },
  { name: 'Equatorial Guinea', region: 'Africa', area: 28051.0, independent: false },
];

function App() {
  const [ascending, setAcsending] = useState(true);

  const strAscending = [...DUMMY_DATA].sort((a, b) => (a.name > b.name ? 1 : -1));
  const strDescending = [...DUMMY_DATA].sort((a, b) => (a.name > b.name ? -1 : 1));

  const filteredByOrder = ascending ? strAscending : strDescending;

  const orderHandler = (e) => {
    setAcsending(e.target.value === 'ascending');
  };

  return (
    <div className='bg-gradient-to-tr from-gray-700 via-gray-800 to-gray-900 h-screen px-6'>
      <Header />
      <FilterContainer option={orderHandler} />
      <CountriesList list={filteredByOrder} />
    </div>
  );
}

export default App;
