function Order() {
  return (
    <div>
      <label htmlFor='sort' className='pr-2 text-white'>
        Sort by:
      </label>
      <select
        name='sort'
        id='sort'
        className='w-full py-2 px-4 border rounded-md shadow-md shadow-gray-600 cursor-pointer text-gray-400'
      >
        <option value='default' className='text-black' />
        <option value='assending' className='text-black'>
          Assending
        </option>
        <option value='dessending' className='text-black'>
          Dessending
        </option>
      </select>
    </div>
  );
}

export default Order;
