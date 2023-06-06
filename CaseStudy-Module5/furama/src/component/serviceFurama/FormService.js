import '../../css/ServiceCss/FormServiceCss.css'

export const FormService = () => {
    return(
        <>
            <section
                className="vh-70 bg-image"
                style={{backgroundImage:"url('../image/100.jpg')"}}
            >
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div
                            className="row d-flex justify-content-center align-items-center h-100"
                        >
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{borderRadius : " 15px"}}>
                                    <div className="card-body p-5">
                                        <h3 className="title text-uppercase text-center mt-4">
                                            Thêm mới dịch vụ
                                        </h3>
                                        <form>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example1cg"
                                                >Tên dịch vụ</label
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
                                                >Diện tích sử dụng</label
                                                >
                                                <span className="text-danger">*</span>
                                                <input
                                                    type="number"
                                                    id="form3Example3cg"
                                                    className="form-control form-control-lg"
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cg"
                                                >Chi phí thuê</label
                                                >
                                                <span className="text-danger">*</span>
                                                <input
                                                    type="number"
                                                    id="form3Example4cg"
                                                    className="form-control form-control-lg"
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cdg"
                                                >Số lượng người thuê tối đa</label
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
                                                >Kiểu thuê</label
                                                >
                                                <span className="text-danger">*</span>
                                                <input
                                                    type="number"
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