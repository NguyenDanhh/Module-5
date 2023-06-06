import '../../css/customer/listCustomer.css'

export const ListCustomer = () => {
    return(
        <>
            <div className="content mt-5">
                <div className="container">
                    <button className="btn btn-dark fw-semibold">
                        Thêm mới <i className="fa-solid fa-user-plus"></i>
                    </button>
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
                        <tr>
                            <th>1</th>
                            <td>Nguyễn Danh</td>
                            <td>15/11/2003</td>
                            <td>Nam</td>
                            <td>123455678</td>
                            <td>123123123</td>
                            <td>danh@gmail.com</td>
                            <td>Diamond</td>
                            <td>Đà Nẵng</td>
                            <td className="text-center">
                                <i className="fa-solid fa-pen-to-square update-btn"></i>
                            </td>
                            <td className="text-center">
                                <i className="fa-solid fa-trash-can trash-can"></i>
                            </td>
                        </tr>
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