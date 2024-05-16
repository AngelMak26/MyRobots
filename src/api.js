import axios from 'axios';

const searchRobots = async () => {
    try {
        const response = await axios.get('https://robohash.org/?set=set1&size=200x200');
        return response.data;
    } catch (error) {
        console.error('Error fetching robots:', error);
        return [];
    }
};

export default searchRobots;
