import axios from "axios";

export const getAll = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    return res.data;
}

export const deleteUsers = async (id) => {
   await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
}

