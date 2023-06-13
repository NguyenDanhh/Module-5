import axios from "axios";

export const getListRoom = async ()=> {
    const res = await axios.get("http://localhost:8080/room")
    return res.data;
}