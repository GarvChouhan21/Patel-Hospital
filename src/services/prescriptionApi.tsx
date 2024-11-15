import AsyncStorage from "@react-native-async-storage/async-storage";
import { EndPoints } from ".";

export const getAuthToken = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
            throw new Error('No token found');
        }
        return token;
    } catch (error) {
        console.error('Error retrieving token:', error);
        throw error; 
    }
};

// --------------------------- Get Prescription List by mr number ---------------------------
export const getPrescriptionList = async (pageSize: any, mrno: any) => {
    const token = await getAuthToken();
    const queryString = new URLSearchParams({
        pageSize,
        mrno
    }).toString();
    try{
        const response = await fetch(`${process.env.API_BASE_URL}/${EndPoints.PRESCRIPTION_BY_MR_NO}?${queryString}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        if(!response.ok){
            throw new Error('Error in get prescription list');
        }
        const data = await response.json();
        return data;
    }
    catch(error){
        console.error('Error in get prescription list', error);
    }
};

// -------------------------- Get prescription detail by mrno and visitiD --------------
export const getPrescrptionDetail = async (mrno: any,visitId: any) => {
    const token = await getAuthToken();
    try{
        const response = await fetch(`${process.env.API_BASE_URL}/${EndPoints.PRESCRIPTION_BY_MR_AND_VISIT}/${mrno}/${visitId}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        if(!response.ok){
            throw new Error('Error in get prescription description');
        }
        const data = await response.json();
        return data;
    }
    catch(error){
        console.error('Error in get prescription detail', error);
    }
};



