import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {getById, getTypeCustomer, updateCustomers} from "../../service/CustomerService";
import {useNavigate, useParams} from "react-router-dom";
import {useSearchParams} from "react-router-dom";
import {toast} from "react-toastify";

export function UpdateCustomer() {
    const navigate = useNavigate()
    const param = useParams()
    const [typeCustomer, setTypeCustomer] = useState([])
    const [customer, setCustomer] = useState({})

    const getElementById = async () => {
        const res = await getById(param.id)
        setCustomer(res)
    }

    const displayTypeCustomer = async () => {
        const res = await getTypeCustomer()
        setTypeCustomer(res)
    }

    useEffect(() => {
        getElementById()
        displayTypeCustomer()
    }, [])

    return (
        <Formik
            enableReinitialize={true}
            initialValues={
                {
                    id: customer?.id,
                    name: customer.name,
                    dateOfBirth: customer.dateOfBirth,
                    gender: customer.gender,
                    idCard: customer.idCard,
                    phoneNumber: customer.phoneNumber,
                    email: customer.email,
                    address: customer.address,
                    customerType: customer.customerType
                }
            }
            onSubmit={(values => {
                    const updateCustomer = async () => {
                        await updateCustomers(param.id, values)
                    }
                    updateCustomer();
                    toast("Chỉnh sửa thành công")
                    navigate("/customer")
                }
            )}
        >
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
                                            Chỉnh sửa khách hàng
                                        </h3>
                                        <Form>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example1cg"
                                                >Họ và tên </label
                                                >
                                                <span className="text-danger">*</span>
                                                <Field
                                                    type="text"
                                                    id="form3Example1cg"
                                                    className="form-control form-control-lg"
                                                    name="name"
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3cg"
                                                >Ngày sinh</label
                                                >
                                                <span className="text-danger">*</span>
                                                <Field
                                                    type="date"
                                                    id="form3Example3cg"
                                                    className="form-control form-control-lg"
                                                    name="dateOfBirth"
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cg"
                                                >Giới tính</label
                                                >
                                                <span className="text-danger">*</span>
                                                <Field
                                                    className="form-control form-control-lg"
                                                    name="1"
                                                    value={customer.gender = 1 ? "Nam" : "Nữ"}
                                                    readOnly/>

                                            </div>

                                                {/*</div>*/}

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4cdg"
                                                >Số CMND</label
                                                >
                                                <span className="text-danger">*</span>
                                                <Field
                                                    type="number"
                                                    id="form3Example4cdg"
                                                    className="form-control form-control-lg"
                                                    name="idCard"
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form4Example4cdg"
                                                >Sô điện thoại</label
                                                >
                                                <span className="text-danger">*</span>
                                                <Field
                                                    type="number"
                                                    id="form4Example4cdg"
                                                    className="form-control form-control-lg"
                                                    name="phoneNumber"
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form4Example4cdg"
                                                >E-mail</label
                                                >
                                                <span className="text-danger">*</span>
                                                <Field
                                                    type="text"
                                                    id="form4Example4cdg"
                                                    className="form-control form-control-lg"
                                                    name="email"
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form4Example4cdg"
                                                >Loại khách</label
                                                >
                                                <span className="text-danger">*</span>
                                                <Field
                                                    as="select"
                                                    id="form4Example4cdg"
                                                    className="form-control form-control-lg"
                                                    name="typeCustomer"
                                                >
                                                    {
                                                        typeCustomer.map((value =>
                                                                <option value={value.id}>{value.name}</option>
                                                        ))
                                                    }
                                                </Field>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form4Example4cdg"
                                                >Địa chỉ </label
                                                >
                                                <span className="text-danger">*</span>
                                                <Field
                                                    type="text"
                                                    id="form4Example4cdg"
                                                    className="form-control form-control-lg"
                                                    name="address"
                                                />
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button
                                                    type="submit"
                                                    className="btn flex-grow-1 submit-form"
                                                >
                                                    Lưu
                                                </button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Formik>
    )

}