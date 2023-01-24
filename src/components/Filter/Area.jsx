function Area() {
  return (
    <div className>
      <label className='pr-2 text-white' htmlFor='area'>
        Enter area:
      </label>
      <input
        type='number'
        className='w-full py-2 px-4 border rounded-md shadow-md shadow-gray-600 cursor-pointer text-gray-400'
        id='area'
      />
    </div>
  );
}

export default Area;
