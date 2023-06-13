import axios from "axios";

export const getListCustomer = async () => {
    const res = await axios.get("http://localhost:8080/customers")
    return res.data
}

export const getTypeCustomer = async () => {
    const res = await axios.get("http://localhost:8080/typeCustomer")
    return res.data
}

export const createCustomer = async (obj) =>{
    await axios.put("http://localhost:8080/customers" , obj)
}