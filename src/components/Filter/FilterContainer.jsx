import Order from './Order';
import Region from './Region';
import Area from './Area';

function FilterContainer({ onOrderChange, onRegionChange, onAreaChange }) {
  return (
    <div className='flex gap-4 md:justify-center py-2'>
      <Order onChange={onOrderChange} />
      <Region onChange={onRegionChange} />
      <Area onChange={onAreaChange} />
    </div>
  );
}

export default FilterContainer;
