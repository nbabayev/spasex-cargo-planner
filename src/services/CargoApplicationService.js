import axios from "axios";
const baseUrl = "http://localhost:5000";

export class CargoApplicationService {
    getAll(label) {
        return axios.get(`${baseUrl}/${label}`);
    }

    getItem(label, name) {
        return axios.get(`${baseUrl}/${label}/?name=${name}`);
    }

    update(label, id, data) {
        return axios.put(`${baseUrl}/${label}/${id}`, data);
    }
}

export default new CargoApplicationService();