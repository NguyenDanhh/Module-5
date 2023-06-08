import {ErrorMessage, Field, Form, Formik} from "formik";
import 'bootstrap/dist/css/bootstrap.css';
import './Contact.css';
import * as yup from 'yup';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export function ContactForm() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                }}
                validationSchema={yup.object({
                    name: yup.string()
                        .required("Không được để trống"),

                    email: yup.string()
                        .required("Không được để trống ")
                        .matches(/^[\w-\.]+@([\w-]+\.[com])+[\w-]{2,4}$/),
                    phone: yup.string()
                        .matches(/^(0)[\d]{9}$/)
                        .required("Không được để trống "),
                    message: yup.string()
                        .required("Không được để trống")

                })}
                onSubmit={(values) => {
                    console.log(values)
                    toast(`Contact ${values.name} create success!!!`)
                }}>
                        <div className="container" style={{marginTop: '100px'}}>
                            <h1 style={{textAlign: 'center'}}>Form Contact</h1>
                            <Form>
                                <div className="input-group mb-3 form-custom">
                                    <span className="input-group-text" id="basic-addon1">Name</span>
                                    <Field type="text" className="form-control" placeholder="Enter Name" aria-label="Username"
                                           aria-describedby="basic-addon1" name='name'/>
                                    <ErrorMessage name='name' component='span' className="text-danger"/>
                                </div>
                                <div className="input-group mb-3 form-custom">
                                    <span className="input-group-text" id="basic-addon1">Email</span>
                                    <Field type="text" className="form-control" placeholder="Enter E-mail" aria-label="Username"
                                           aria-describedby="basic-addon1" name='email'/>
                                    <ErrorMessage name='email' component='span' className="text-danger"/>
                                </div>
                                <div className="input-group mb-3 form-custom">
                                    <span className="input-group-text" id="basic-addon1">Phone</span>
                                    <Field type="text" className="form-control" placeholder="Enter Phone Number"
                                           aria-label="Username"
                                           aria-describedby="basic-addon1" name='phone'/>
                                    <ErrorMessage name='phone' component='span' className="text-danger"/>
                                </div>
                                <div className="input-group mb-3 form-custom">
                                    <span className="input-group-text" id="basic-addon1">Message</span>
                                    <Field className="form-control" name='message' placeholder="Enter Message"/>
                                    <ErrorMessage name='message' component='span' className="text-danger"/>
                                </div>
                                <div>

                                    <button type="submit" className="btn btn-primary form-custom">Submit</button>
                                </div>
                            </Form>
                        </div>
            </Formik>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}