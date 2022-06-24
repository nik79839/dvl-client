import * as axios from "axios";

export const verificationAPI = {
    getProfile() {
        return axios.get('api/fields'); //
    },
}

