import FilterContainer from './components/Filter/FilterContainer';
import CountriesList from './components/CountriesList';
import Header from './components/Header';

function App() {
  return (
    <div
      className='
      bg-gradient-to-tr
      from-gray-700
      via-gray-800
      to-gray-900
      h-screen
      px-6'
    >
      <Header />
      <FilterContainer />
      <CountriesList />
    </div>
  );
}

export default App;
