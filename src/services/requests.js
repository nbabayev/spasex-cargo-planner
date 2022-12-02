import CAS from "../services/CargoApplicationService";

export const getAll = async (label) => {
    try {
        let response = await CAS.getAll(label);
        if (!response) return [];
        return response;
    } catch (error) {
        console.log(`error occured when fetching all ${label}: `, error)
    }
}

export const getItem = async (label, name) => {
    try {
        let response = await CAS.getItem(label, name);
        if (!response) return {};
        return response;
    } catch (error) {
        console.log(`error occured when fetching name ${name} ${label}: `, error)
    }
}

export const updateItem = async (label, id, data) => {
    try {
        let response = await CAS.update(label, id, data);
        if (!response) return {};
        return response;
    } catch (error) {
        console.log(`error occured when fetching id ${id} ${label}: `, error)
    }
}