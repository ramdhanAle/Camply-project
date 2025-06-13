import { API } from "../_api";

export const login = async ({email, password}) => {
    try {
        const {data} = await API.post('/login', {email, password});
        return data;
    } catch(error) {
        throw error;
    }
}

export const register = async ({email, name, password}) => {
    try {
        const {data} = await API.post('/register', {email, name, password});
        return data;
    } catch(error) {
        throw error;
    }
}

export const logout = async (token) => {
    try {
        await API.post('/logout',{
            headers : {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
}