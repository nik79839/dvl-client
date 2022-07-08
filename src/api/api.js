import * as axios from "axios";

export const verificationAPI = {
    getFields() {
        return axios.get('https://localhost:5001/api/fields'); //
    },
    postFields(fieldList) {
        return axios.post('https://localhost:5001/api/fields',fieldList); //
    },
}

