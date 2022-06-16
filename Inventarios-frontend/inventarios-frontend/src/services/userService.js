import { axiosInstance } from "../helpers/axios-config";

const getUser = () => {
    return axiosInstance.get('user',{
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

const postUser = (data) => {
    return axiosInstance.post('user', data, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

const putUser = (userId, data) => {
    return axiosInstance.put(`user/${userId}`, data,{
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export{getUser, postUser, putUser};