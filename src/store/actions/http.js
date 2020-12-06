import axios from "axios";
import qs from "qs"
const http = axios.create({
    baseURL: "https://www.adorebeauty.com.au/api/ecommerce/catalog",
    paramsSerializer:params=>{
        return qs.stringify(params,{arrayFormat: 'indices'})
    }
});
export default http;