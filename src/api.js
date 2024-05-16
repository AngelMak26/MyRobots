import axios from 'axios';

const searchRobots = async () => {
    try {
        const response = await axios.get('https://api.therobotcompany.com/robots');
        return response.data;
    } catch (error) {
        console.error('Error fetching robots:', error);
        return [];
    }
};

export default searchRobots;
