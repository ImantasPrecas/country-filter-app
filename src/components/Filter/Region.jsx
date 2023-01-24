function Region() {
  return (
    <div>
      <label htmlFor='sort' className='pr-2 text-white'>
        Filter by region:
      </label>
      <select
        name='filter'
        id='filter'
        className='w-full py-2 px-4 border rounded-md shadow-md shadow-gray-600 cursor-pointer text-gray-400'
      >
        <option value='default' />
        <option value='africa' className='text-black'>
          Africa
        </option>
        <option value='america' className='text-black'>
          Americas
        </option>
        <option value='asia' className='text-black'>
          Asia
        </option>
        <option value='europe' className='text-black'>
          Europe
        </option>
        <option value='oceania' className='text-black'>
          Oceania
        </option>
      </select>
    </div>
  );
}

export default Region;
