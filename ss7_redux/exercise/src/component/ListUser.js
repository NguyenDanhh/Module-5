import "./user.css"
import {useEffect, useState} from "react";
import {deleteUsers, getAll} from "../service/UserService";
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from "react-router";

function ListUser() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([])
    const [nameDelete , setNameDelete] = useState('')
    const [idDelete , setIdDelete] = useState(0)
    const display = async () => {
        const result = getAll()
        setUsers(await result);

    }
    display();

    const handleConfirm = (value) => {
        setNameDelete(value.name);
        setIdDelete(value.id);
    }

    const deleteUser = async (id) =>{
        await deleteUsers(id)
        navigate("/users")
    }
    useEffect(() => {
        getAll()
    }, [])
    return (
        <>
            <div className='container'>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                    <td>
                                        <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#exampleModal" onClick={() => handleConfirm(user)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            Bạn có muốn xóa <span>{nameDelete}</span>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" onClick={() => deleteUser(idDelete)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListUser;