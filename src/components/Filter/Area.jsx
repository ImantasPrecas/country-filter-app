function Area({ onChange }) {
  return (
    <div>
      <label className='pr-2 text-white' htmlFor='area'>
        Area less then:
      </label>
      <input
        onChange={onChange}
        type='number'
        className='w-full py-2 px-4 border rounded-md shadow-md shadow-gray-600 cursor-pointer text-gray-400'
        id='area'
      />
    </div>
  );
}

export default Area;
