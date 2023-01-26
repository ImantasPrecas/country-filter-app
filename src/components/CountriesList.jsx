import CountrieItem from './CountrieItem';

function CountriesList({ list }) {
  return (
    <section className='mt-6 border rounded-sm shadow-sm shadow-gray-600 bg-gray-300'>
      <ul>
        {list.map((item) => (
          <CountrieItem
            key={item.name}
            name={item.name}
            region={item.region}
            area={item.area}
          />
        ))}
      </ul>
    </section>
  );
}

export default CountriesList;
