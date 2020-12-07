import axios from "axios";
const http = axios.create({
    baseURL: "https://www.adorebeauty.com.au/api/ecommerce/catalog",

});
export default http;