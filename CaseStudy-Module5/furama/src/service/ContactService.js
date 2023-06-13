import axios from "axios";

 export const getListContact = async()=>{
    const result = await axios.get("http://localhost:8080/contact")
    return result.data
}
