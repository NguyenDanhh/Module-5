import '../../css/customer/listCustomer.css'
import 'bootstrap/dist/css/bootstrap.css'
import {useEffect, useState} from "react";
import {deleteCustomer, getById, getListCustomer, getTypeCustomer} from "../../service/CustomerService";
import {Link, NavLink, useParams} from "react-router-dom";
import {ToastContainer} from "react-toastify";

export function ListCustomer() {
    const [listCustomer, setListCustomer] = useState([])
    const [typeCustomer, setTypeCustomer] = useState([])
    const [idDelete,setIdDelete] = useState(null)
    const [nameDelete,setNameDelete] = useState(null)
    const displayTypeCustomer = async () => {
        const res = getTypeCustomer()
        setTypeCustomer(await res)
        console.log(res)
    }

    const displayListCutomer = async () => {
        const res = getListCustomer()
        setListCustomer(await res)
    }

    const handleConfirm = async (id , name) => {
          setIdDelete(id)
        setNameDelete(name)
    }
    const handleDelete = async (id) => {
        await deleteCustomer(id)
        displayListCutomer()
    }
    useEffect(() => {
        displayListCutomer()
        displayTypeCustomer()
    }, [])

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"/>
            <div className=" mt-5">
                <div className="container content">
                    <h1 style={{textAlign: "center"}}>Danh sách khách hàng </h1>
                    <Link to='/create-customer' className="btn btn-dark fw-semibold">
                        Thêm mới <i className="fa-solid fa-user-plus"/>
                    </Link>

                    <div className="input-group">
                            <input
                                type="search"
                                name="search-form"
                                id="search-form"
                                className="search-input"
                                placeholder="Search for..."
                                // value={q}
                                /*
                                // set the value of our useState q
                                //  anytime the user types in the search box
                                */
                                // onChange={(e) => setQ(e.target.value)}
                            />
                            <span className="sr-only">Search countries here</span>
                    </div>
                    <table className="table">
                        <thead className="table-light">
                        <tr>
                            <th>ID</th>
                            <th>Họ tên</th>
                            <th>Ngày sinh</th>
                            <th>Giới tính</th>
                            <th>Số CMND</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th>Loại khách</th>
                            <th>Địa chỉ</th>
                            <th className="text-center">Chỉnh sửa</th>
                            <th className="text-center">Xóa</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            listCustomer.map((value) => {
                                return (
                                    <tr key={value.id}>
                                        <th>{value.id}</th>
                                        <td>{value.name}</td>
                                        <td>{value.dateOfBirth}</td>
                                        <td>{value.gender = 1 ? "Name" : "Nữ"}</td>
                                        <td>{value.idCard}</td>
                                        <td>{value.phoneNumber}</td>
                                        <td>{value.email}</td>
                                        <td>{typeCustomer.filter(ct => ct.id === value.customerType)[0]?.name}</td>
                                        <td>{value.address}</td>
                                        <td className="text-center">
                                            <NavLink to={"/update-customer/" + value.id}>
                                                <i className="fa-solid fa-pen-to-square update-btn"/>
                                            </NavLink>
                                        </td>
                                        <td className="text-center">
                                            <i className="fa-solid fa-trash-can trash-can btn btn-secondary"
                                               data-bs-toggle="modal" data-bs-target="#exampleModal"
                                            onClick={() => handleConfirm(value.id,value.name)}/>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"/>
                                </div>
                                <div className="modal-body">
                                    Bạn có muốn xóa <span>{nameDelete}</span>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                    </button>
                                    <button type="submit" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => handleDelete(idDelete)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link text-dark" href="#"
                                    ><span aria-hidden="true">&laquo;</span></a
                                    >
                                </li>
                                <li className="page-item">
                                    <a className="page-link text-dark" href="#">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link text-dark" href="#">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link text-dark" href="#">3</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link text-dark" href="#"
                                    ><span aria-hidden="true">&raquo;</span></a
                                    >
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <ToastContainer/>

        </>
    )
}