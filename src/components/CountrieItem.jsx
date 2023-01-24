function CountrieItem() {
  return (
    <>
      <div>
        <li className='border my-2 mx-2 px-2 py-2 shadow-md bg-gray-100'>
          <h2 className='text-xl font-semibold'>
            Country: <span className='uppercase'>Bermuda</span>
          </h2>
          <p className='text-sm'>Region: Americas</p>
          <p className='text-sm'>
            Area: 54.0 km<sup>2</sup>
          </p>
        </li>
        {/* COUNTRY ITEM */}
        <li className='border my-2 mx-2 px-2 py-2 shadow-md bg-gray-100'>
          <h2 className='text-xl font-semibold'>
            Country: <span className='uppercase'>Georgia</span>
          </h2>
          <p className='text-sm'>Region: Asia</p>
          <p className='text-sm'>
            Area: 69700.0 km<sup>2</sup>
          </p>
        </li>
        {/* COUNTRY ITEM */}
        <li className='border my-2 mx-2 px-2 py-2 shadow-md bg-gray-100'>
          <h2 className='text-xl font-semibold'>
            Country: <span className='uppercase'>Mauritius</span>
          </h2>
          <p className='text-sm'>Region: Africa</p>
          <p className='text-sm'>
            Area: 2040.0 km<sup>2</sup>
          </p>
        </li>
        {/* COUNTRY ITEM */}
        <li className='border my-2 mx-2 px-2 shadow-md bg-gray-100'>
          <h2 className='text-xl font-semibold'>
            Country: <span className='uppercase'>Ukraine</span>
          </h2>
          <p className='text-sm'>Region: Europe</p>
          <p className='text-sm'>
            Area: 603700.0 km<sup>2</sup>
          </p>
        </li>
      </div>
    </>
  );
}

export default CountrieItem;
