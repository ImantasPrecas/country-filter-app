import axios from 'axios';

export const getCountries = async () => {
  try {
    const response = await axios.get(
      'https://restcountries.com/v2/all?fields=name,region,area'
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getRegions = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v2/all?fields=region');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
