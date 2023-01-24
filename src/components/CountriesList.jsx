import CountrieItem from './CountrieItem';

function CountriesList() {
  return (
    <section className='mt-6 border rounded-sm shadow-sm shadow-gray-600 bg-gray-300'>
      <ul>
        <CountrieItem />
      </ul>
    </section>
  );
}

export default CountriesList;
