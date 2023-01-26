function Order({ onChange }) {
  return (
    <div className='w-full'>
      <label htmlFor='sort' className='pr-2 text-white'>
        Sort by:
      </label>
      <select
        onChange={onChange}
        name='sort'
        id='sort'
        className='w-full py-2 px-4 border rounded-md shadow-md shadow-gray-600 cursor-pointer text-gray-400'
      >
        <option value='default' className='text-black' />
        <option value='ascending' className='text-black'>
          Assending
        </option>
        <option value='descending' className='text-black'>
          Dessending
        </option>
      </select>
    </div>
  );
}

export default Order;
