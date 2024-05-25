import axios from 'axios';
import { useContext } from 'react';


const config = (token) => {
    const configA = {

        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJraWQiOiJoRExTNUVhZWFNWHlnYmM1NFBwOVVPSFM2djl2ejVKTUNQaEduU1VQeXU4PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI3N2Q2M2RjOC00YTM0LTQ5OTctODk4Ni1lZGI2YTgwYzlkNmEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTIuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTJfb3EzUXVEMGpIIiwiY2xpZW50X2lkIjoiNGJrMWZ0Y2xnbXVib2xyZnNydHUybWdqanIiLCJvcmlnaW5fanRpIjoiNGU0ZDljMjItMzFlMS00MWY2LThiOTYtYTlmMzE0ZTFiMmUwIiwiZXZlbnRfaWQiOiI2MWFhNWJjNC00OGE5LTQ0ZjUtOTFmOS1kYTIwM2NjOTM4ZWMiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIG9wZW5pZCBlbWFpbCIsImF1dGhfdGltZSI6MTcxMzc2MDQ5MywiZXhwIjoxNzEzNzY0MDkzLCJpYXQiOjE3MTM3NjA0OTMsImp0aSI6ImM4ZDI3ZTI0LTBkM2ItNGYwNy1iYmU2LTQ3ZGQyZjg2OTI3ZCIsInVzZXJuYW1lIjoiNzdkNjNkYzgtNGEzNC00OTk3LTg5ODYtZWRiNmE4MGM5ZDZhIn0.y3WpOukZuztnSVroi2th0qjJrIPRlSKdxLyEckzwz1Ln_hsw6GqD8P-ZTGQT0w7VNnlCKCMZJddadYZyMJn3ITkadpoZAz3T7ZJh6WTT76GsN0f8LBdLhqcMXKy9k8T2sruDXgJY3BnKRUtWbTQBnmOySCwjIDw_HnJfpLUsCc8y-JEOOg9a3qBHnzjTMXTVzSG6LyNkou_HME_KlYvnnQ9xbAAt4T4hW2hGlaW1UJDGkAkEZ9ytmsLNApD3rz560QMvoPkOeOYYDzUFyNtYEoQc1cM2b8lEj7IRBM3XLHvut8thfjfRdnq7dkLGKW_W6lrPYiqe7rzhUHlHYLtbGw"
        }
    };
    return configA;

}


export const baseUrl='http://192.168.20.26:8080';
const getUsers = async (token) => {

    try {

        const response = await axios(
            {

                method: 'GET',
                url:`${baseUrl}/api/v1/user/getusers`,
                proxy:false,
                
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                    'Content-Type': 'application/json',
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                    Accept: 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            });

        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        //console.error('Error fetching users:', error.response);
        //console.error('Error fetching users:', error.request);
        //console.error('Error fetching users:', error.message);
        return [];
    }
};


export default getUsers;