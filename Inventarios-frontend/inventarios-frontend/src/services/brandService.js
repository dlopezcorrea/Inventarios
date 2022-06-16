import { axiosInstance } from "../helpers/axios-config";

const getBrand = () => {
    return axiosInstance.get('brand',{
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

const postBrand = (data) => {
    return axiosInstance.post('brand', data, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

const putBrand = (brandId, data) => {
    return axiosInstance.put(`brand/${brandId}`, data,{
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export{getBrand, postBrand, putBrand};