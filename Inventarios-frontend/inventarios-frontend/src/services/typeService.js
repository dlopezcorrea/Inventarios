import { axiosInstance } from "../helpers/axios-config";

const getType = () => {
    return axiosInstance.get('equipment-type',{
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

const postType = (data) => {
    return axiosInstance.post('equipment-type', data, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

const putType = (equipmentTypeId, data) => {
    return axiosInstance.put(`equipment-type/${equipmentTypeId}`, data,{
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export{getType, postType, putType};