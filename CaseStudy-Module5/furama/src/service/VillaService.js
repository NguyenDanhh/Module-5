import axios from "axios";

export const getListVilla = async ()=> {
    const res = await axios.get("http://localhost:8080/villa")
    return res.data;
}