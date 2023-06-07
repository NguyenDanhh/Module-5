import '../../css/customer/listCustomer.css'

export function ListContact() {
    return (
        <>
            <div className="content mt-5">
                <div className="container">
                    <h1 style={{textAlign : "center"}}>Danh sách hợp đồng</h1>
                    <button className="btn btn-dark fw-semibold">
                        Thêm mới <i className="fa-solid fa-user-plus"></i>
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
                        <tr>
                            <th>1</th>
                            <td>Nguyễn Danh</td>
                            <td>Resort</td>
                            <td>01/02/2023</td>
                            <td>01/12/2023</td>
                            <td>100.000</td>
                            <td>1.000.000</td>
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