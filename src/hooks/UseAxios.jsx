import axios from "axios";

export const AxiosSecure= axios.create({
    baseURL:"http://localhost:5000"
})
const UseAxios = () => {
    return AxiosSecure
};

export default UseAxios;