import { axiosInstance } from "../helpers/axios-config";

const getInventory = () => {
    return axiosInstance.get('inventory',{
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

const postInventory = (data) => {
    return axiosInstance.post('inventory', data, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

const putInventory = (inventory, data) => {
    return axiosInstance.put(`inventory/${inventory}`, data,{
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

const getInventoryById = (inventoryId) => {
    return axiosInstance.get(`inventory/${inventoryId}`,{
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export{getInventory, postInventory, putInventory, getInventoryById};