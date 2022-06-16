import { axiosInstance } from "../helpers/axios-config";

const getStatus = () => {
    return axiosInstance.get('equipment-status',{
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

const postStatus = (data) => {
    return axiosInstance.post('equipment-status', data, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

const putStatus = (equipmentStatusId, data) => {
    return axiosInstance.put(`equipment-status/${equipmentStatusId}`, data,{
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export{getStatus, postStatus, putStatus};