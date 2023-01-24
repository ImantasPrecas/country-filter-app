import Order from './Order';
import Region from './Region';
import Area from './Area';

function FilterContainer({ option }) {
  return (
    <div className='flex gap-4 md:justify-center py-2'>
      <Order option={option} />
      <Region />
      <Area />
    </div>
  );
}

export default FilterContainer;
