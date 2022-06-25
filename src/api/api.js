import * as axios from "axios";

export const verificationAPI = {
    getProfile() {
        return axios.get('https://localhost:5001/api/fields'); //
    },
}

