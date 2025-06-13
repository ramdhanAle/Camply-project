import { API } from "../_api";

const getAllGear = async () => {
    try {
        const {data} = await API.get('/gears');
        return data.data;
    } catch (error) {
        throw error;
    }
}

const showGear = async (id) => {
    try {
        const {data} = await API.get(`/gears/${id}`);
        return data.data;
    } catch {
        throw error;
    }
}

export {getAllGear, showGear};