import { useEffect, useState } from 'react';
import { getRegions } from '../../api/api';

function Region({ onChange }) {
  const [regionsList, setRegionsList] = useState();

  useEffect(() => {
    let ignore = false;

    const loadReagionList = async () => {
      try {
        const response = await getRegions();
        if (!ignore) {
          setRegionsList(response);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    loadReagionList();
    return () => {
      ignore = true;
    };
  }, []);

  const uniqueRegions = () => {
    let newRegionsList = [];
    let uniqueObject = {};

    for (let i in regionsList) {
      let regionName = regionsList[i]['region'];
      uniqueObject[regionName] = regionsList[i];
    }

    for (let i in uniqueObject) {
      newRegionsList.push(uniqueObject[i]);
    }
    return newRegionsList;
  };

  const regions = uniqueRegions();

  return (
    <div className='w-full'>
      <label htmlFor='sort' className='pr-2 text-white'>
        In region:
      </label>
      <select
        onChange={onChange}
        name='filter'
        id='filter'
        className='w-full py-2 px-4 border rounded-md shadow-md shadow-gray-600 cursor-pointer text-gray-400'
      >
        <option value='default' />
        {regions.map((region, index) => (
          <option key={index} value={region.region} className='text-black'>
            {region.region}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Region;
