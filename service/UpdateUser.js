import axios from 'axios';
import { baseUrl } from './UserService';

const UpdateUser = async (user,token) => {
    try {
        
        const response = await axios.post(`${baseUrl}/api/v1/user/saveuser`, user, {
            headers: {

                'Content-Type': 'application/json',

                'Authorization': 'Bearer ' + token
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        return null;
    }
}


export default UpdateUser;