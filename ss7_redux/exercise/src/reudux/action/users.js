import {GET_ALL_USERS , DELETE_USER} from "./type";

export const getAllUser = () => async (dispacth) => {
    try{
        const res = await getAll()

        dispacth({
            type : GET_ALL_USERS ,
            payload : res.data
        })
    }catch (e) {
        console.log(e)
    }
}

export const deleteUser = () => async (dispacth) => {
    try{
        const res = await deleteUsers()

        dispacth({
            type : GET_ALL_USERS ,
            payload : res.data
        })
    }catch (e) {
        console.log(e)
    }
}