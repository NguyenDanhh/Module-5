import axios from "axios";

export const fillAll = async () => {
    try{
        const result = await axios.get("http://localhost:8080/todo")

        return result.data;
    }catch (e) {
        console.log(e)
    }
}


export const createTodo = async (values) => {
    try{
        await axios.post("http://localhost:8080/todo",values)
    }catch (e) {
        console.log(e)
    }
}
