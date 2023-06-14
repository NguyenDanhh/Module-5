import '../../css/customer/listCustomer.css'
import {useEffect, useState} from "react";
import {getListContact} from "../../service/ContactService";
import {getListCustomer} from "../../service/CustomerService";

export function ListContact() {
    const [listContact, setListContact] = useState([])
    const [listCustomer, setListCustomer] = useState([])
    const displayListContact = async () => {
        const result = await getListContact();
        setListContact(result)
    }

    const displayListCustomer = async () => {
        const res = await getListCustomer()
        setListCustomer(res)
    }
    useEffect(() => {
        displayListContact()
        displayListCustomer()
    }, [])

    return (
        <>
            <div className=" mt-5">
                <div className="container content">
                    <h1 style={{textAlign: "center"}}>Danh sách hợp đồng</h1>
                    <button className="btn btn-dark fw-semibold">
                        Thêm mới <i className="fa-solid fa-user-plus"/>
                    </button>
                    <table className="table">
                        <thead className="table-light">
                        <tr>
                            <th>Mã hợp đồng</th>
                            <th>Tên khách hàng</th>
                            <th>Dịch vụ</th>
                            <th>Ngày bắt đầu</th>
                            <th>Ngày kết thúc</th>
                            <th>Số tiền cọc trước</th>
                            <th>Tổng số tiền thanh toán</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            listContact.map((value => {
                                return (
                                    <tr key={value.id}>
                                        <td>{value.id}</td>
                                        <td>{listCustomer.find(value1 => value1.id === value.customerId).name}</td>
                                        <td>{value.service}</td>
                                        <td>{value.startDay}</td>
                                        <td>{value.endDate}</td>
                                        <td>{value.deposit}</td>
                                        <td>{value.totalPayment}</td>
                                    </tr>
                                )
                            }))
                        }
                        </tbody>
                    </table>
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
        </>

    )
}