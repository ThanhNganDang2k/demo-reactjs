// import { LoginPayload } from '@/models'
import axiosClient from "./axiosClient";

const userApi={
    register(data) {
        const url='/auth/singup';
        return axiosClient.post(url,data)
    },
    logout() {
        const url='/role/logout';
        return axiosClient.get(url)
    },
    login(data) {
        const url='/auth/signin';
        return axiosClient.post(url,data)
    },
	
};
export default userApi;