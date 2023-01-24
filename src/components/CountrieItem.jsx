function CountrieItem({ name, region, area }) {
  return (
    <>
      <div>
        <li className='border my-2 mx-2 px-2 py-2 shadow-md bg-gray-100'>
          <h2 className='text-xl font-semibold'>
            Country: <span className='uppercase'>{name}</span>
          </h2>
          <p className='text-sm'>Region: {region}</p>
          <p className='text-sm'>
            Area: {area} km<sup>2</sup>
          </p>
        </li>
      </div>
    </>
  );
}

export default CountrieItem;
