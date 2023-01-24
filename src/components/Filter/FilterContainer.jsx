import Order from './Order';
import Region from './Region';
import Area from './Area';

function FilterContainer() {
  return (
    <div className='flex gap-4 md:justify-center py-2'>
      <Order />
      <Region />
      <Area />
    </div>
  );
}

export default FilterContainer;
