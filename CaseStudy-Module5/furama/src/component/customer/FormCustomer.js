import '../../css/ServiceCss/FormServiceCss.css'

export function FormCustomer() {
    return (
        <>
            <section
                className="vh-70 bg-image"
                style={{backgroundImage: "url('../image/100.jpg')"}}
            >
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div
                            className="row d-flex justify-content-center align-items-center h-100"
                        >
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{borderRadius: " 15px"}}>
                                    <div className="card-body p-5">
                                        <h3 className="title text-uppercase text-center mt-4">
                                            Thêm mới khách hàng
                                        </h3>
                                        <form>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example1cg"
                                                >Họ và tên </label
                                                >
                                                <span className="text-danger">*</span>
                                                <input
                                                    type="text"
                                                    id="form3Example1cg"
                                                    className="form-control form-control-lg"
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg"
                                                >Ngày sinh</label
                                                >
                                                <span className="text-danger">*</span>
                                                <input
                                                    type="date"
                                                    id="form3Example3cg"
                                                    className="form-control form-control-lg"
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cg"
                                                >Giới tính</label
                                                >
                                                <span className="text-danger">*</span>
                                                <input
                                                    type="text"
                                                    id="form3Example4cg"
                                                    className="form-control form-control-lg"
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cdg"
                                                >Số CMND</label
                                                >
                                                <span className="text-danger">*</span>
                                                <input
                                                    type="number"
                                                    id="form3Example4cdg"
                                                    className="form-control form-control-lg"
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form4Example4cdg"
                                                >Sô điện thoại</label
                                                >
                                                <span className="text-danger">*</span>
                                                <input
                                                    type="number"
                                                    id="form4Example4cdg"
                                                    className="form-control form-control-lg"
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form4Example4cdg"
                                                >E-mail</label
                                                >
                                                <span className="text-danger">*</span>
                                                <input
                                                    type="text"
                                                    id="form4Example4cdg"
                                                    className="form-control form-control-lg"
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form4Example4cdg"
                                                >Loại khách</label
                                                >
                                                <span className="text-danger">*</span>
                                                <input
                                                    type="text"
                                                    id="form4Example4cdg"
                                                    className="form-control form-control-lg"
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form4Example4cdg"
                                                >Địa chỉ </label
                                                >
                                                <span className="text-danger">*</span>
                                                <input
                                                    type="text"
                                                    id="form4Example4cdg"
                                                    className="form-control form-control-lg"
                                                />
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button
                                                    type="button"
                                                    className="btn flex-grow-1 submit-form"
                                                >
                                                    Thêm mới
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
