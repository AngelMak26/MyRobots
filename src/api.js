import axios from 'axios';

export const searchRobots = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching robots:', error);
    return [];
  }
}
