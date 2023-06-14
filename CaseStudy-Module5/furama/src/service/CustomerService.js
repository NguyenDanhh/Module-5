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
    await axios.post("http://localhost:8080/customers" , obj)
}

export const getById = async (id) => {
    return (await axios.get(`http://localhost:8080/customers/${id}`)).data
}
export const updateCustomers = async (id,obj) =>{
    await axios.put(`http://localhost:8080/customers/${id}` , obj)
}
export const deleteCustomer = async (id) =>{
    await axios.delete(`http://localhost:8080/customers/${id}`)
}