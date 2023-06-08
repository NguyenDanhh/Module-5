import {ErrorMessage, Field, Form, Formik} from "formik";
import 'bootstrap/dist/css/bootstrap.css';
import * as yup from 'yup';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function MedicalForm() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    idCard: '',
                    dayOfBirth: null,
                    gender: 1,
                    country: '',
                    company: '',
                    part: '',
                    insurance: true,
                    city: '',
                    district: '',
                    ward: '',
                    apartmentNumber: '',
                    phone: '',
                    email: '',
                    informationWalk: '',
                    informationSignal: [],
                    informationTangent: [],
                }}

                validationSchema={yup.object(
                    {
                        name: yup.string().required('Vui lòng nhập'),
                        idCard: yup.string().required('Vui lòng nhập'),
                        dayOfBirth: yup.number().required('Vui lòng nhập').min(1900,'Nhập năm sinh phải lớn hơn 1900'),
                        country: yup.string().required('Vui lòng nhập'),
                        email: yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email address').required(' Vui lòng nhập'),
                        phone: yup.number('Phai nhập số').integer().required('Vui lòng nhập'),
                        city: yup.string().required('Vui lòng nhập'),
                        district: yup.string().required('Vui lòng nhập'),
                        ward: yup.string().required('Vui lòng nhập'),
                        apartmentNumber: yup.string().required('Vui lòng nhập')
                    }
                )}

                onSubmit={(values) => {
                    console.log(values)
                    toast("ok")
                }}>

                <div className="container">
                    <h1 style={{textAlign: "center"}}>Tờ khai y tế</h1>
                    <Form>
                        <div className="form-floating">
                            <Field className="form-control my-4" placeholder="Leave a comment here"
                                   id="floatingTextarea" name='name'/>
                            <label htmlFor="floatingTextarea">Họ tên</label>
                            <ErrorMessage name='name' component='span' className='text-danger'/>
                        </div>
                        <div className="form-floating ">
                            <Field className="form-control my-4" placeholder="Leave a comment here"
                                   id="floatingTextarea" name='idCard'/>
                            <label htmlFor="floatingTextarea">Số hộ chiếu/CNMD</label>
                            <ErrorMessage name='idCard' component='span' className='text-danger'/>
                        </div>
                        <div className="form-floating">
                            <Field className="form-control my-4" placeholder="Leave a comment here"
                                   id="floatingTextarea" name='dayOfBirth' type='number'/>
                            <label htmlFor="floatingTextarea">Năm sinh</label>
                            <ErrorMessage name='dayOfBirth' component='span' className='text-danger'/>
                        </div>
                        <div className="mb-3">
                            <div>Giới tính :</div>
                            <div className="form-check form-check-inline my-4">
                                <Field className="form-check-input " type="radio" id="inlineRadio1"
                                       value="1" name='gender'/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Nam</label>
                            </div>
                            <div className="form-check form-check-inline my-4">
                                <Field className="form-check-input " type="radio" id="inlineRadio2"
                                       value="2" name='gender'/>
                                <label className="form-check-label" htmlFor="inlineRadio2">Nữ</label>
                            </div>
                        </div>
                        <div className="form-floating">
                            <Field className="form-control my-4" placeholder="Leave a comment here"
                                   id="floatingTextarea" name='country'/>
                            <label htmlFor="floatingTextarea">Quốc tịch</label>
                            <ErrorMessage name='country' component='span' className='text-danger'/>
                        </div>
                        <div className="form-floating">
                            <Field className="form-control my-4" placeholder="Leave a comment here"
                                   id="floatingTextarea" name='company'/>
                            <label htmlFor="floatingTextarea">Công ty làm việc</label>
                        </div>
                        <div className="form-floating">
                            <Field className="form-control my-4" placeholder="Leave a comment here"
                                   id="floatingTextarea" name='part'/>
                            <label htmlFor="floatingTextarea">Bộ phận làm việc</label>
                        </div>
                        <div className="form-check form-check-inline my-4">
                            <Field className="form-check-input " type="radio" name="insurance" id="inlineRadio2"
                                   value="true"/>
                            <label className="form-check-label" htmlFor="inlineRadio2">Có thẻ bảo hiểm y tế</label>
                        </div>
                        <h2 style={{textAlign: "center"}}>Địa chỉ liên lạc tại việt nam</h2>
                        <div className="form-floating">
                            <Field className="form-control my-4" placeholder="Leave a comment here"
                                   id="floatingTextarea" name='city'/>
                            <label htmlFor="floatingTextarea">Tỉnh thành</label>
                            <ErrorMessage name='city' component='span' className='text-danger'/>
                        </div>
                        <div className="form-floating">
                            <Field className="form-control my-4" placeholder="Leave a comment here"
                                   id="floatingTextarea" name='district'/>
                            <label htmlFor="floatingTextarea">Quận/huyện</label>
                            <ErrorMessage name='district' component='span' className='text-danger'/>
                        </div>
                        <div className="form-floating">
                            <Field className="form-control my-4" placeholder="Leave a comment here"
                                   id="floatingTextarea" name='ward'/>
                            <label htmlFor="floatingTextarea">Phường/xã </label>
                            <ErrorMessage name='ward' component='span' className='text-danger'/>
                        </div>
                        <div className="form-floating">
                            <Field className="form-control my-4" placeholder="Leave a comment here"
                                   id="floatingTextarea" name='apartmentNumber'/>
                            <label htmlFor="floatingTextarea">Số nhà,phố,tổ dân phố,thôn/đội</label>
                            <ErrorMessage name='apartmentNumber' component='span' className='text-danger'/>
                        </div>
                        <div className="form-floating">
                            <Field className="form-control my-4" placeholder="Leave a comment here"
                                   id="floatingTextarea" name='phone'/>
                            <label htmlFor="floatingTextarea">Điện thoại</label>
                            <ErrorMessage name='phone' component='span' className='text-danger'/>
                        </div>
                        <div className="form-floating">
                            <Field className="form-control my-4" placeholder="Leave a comment here"
                                   id="floatingTextarea" name='email'/>
                            <label htmlFor="floatingTextarea">Email</label>
                            <ErrorMessage name='email' component='span' className='text-danger'/>
                        </div>
                        <div className="form-floating">
                            <Field as='textarea' className="form-control my-4" placeholder="Leave a comment here"
                                   id="floatingTextarea" name='informationWalk'/>
                            <label htmlFor="floatingTextarea">Trong vòng 14 ngày qua , Anh/Chị có đến quốc gia/lãnh thổ
                                nào (Có thể đi qua nhiều quốc gia)</label>
                        </div>
                        <div className="form-floating">
                            <div><h4>Trong vòng 14 ngày Anh/Chị có thấy xuats hiện dấu hiệu nào sau đây không ?</h4>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="sốt" id="defaultCheck1"
                                       name='informationSignal'/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Sốt
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="ho" id="defaultCheck2"
                                       name='informationSignal'/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    Ho
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="khó thở" id="defaultCheck13"
                                       name='informationSignal'/>
                                <label className="form-check-label" htmlFor="defaultCheck13">
                                    Khó thở
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="viêm phổi" id="defaultCheck14"
                                       name='informationSignal'/>
                                <label className="form-check-label" htmlFor="defaultCheck14">
                                    Viêm phổi
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="đau họng" id="defaultCheck15"
                                       name='informationSignal'/>
                                <label className="form-check-label" htmlFor="defaultCheck15">
                                    Đau họng
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="mệt mỏi" id="defaultCheck16"
                                       name='informationSignal'/>
                                <label className="form-check-label" htmlFor="defaultCheck16">
                                    Mệt mỏi
                                </label>
                            </div>
                        </div>
                        <div className="form-floating my-4">
                            <div><h4>Trong vòng 14 ngày Anh/Chị có thấy xuats hiện dấu hiệu nào sau đây không ?</h4>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="1" id="defaultCheck1"
                                       name='informationTangent'/>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Người bệnh hoặc nghi ngờ , mắc bệnh COVID-19
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="2" id="defaultCheck2"
                                       name='informationTangent'/>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    Người từ nước ngoài mắc bệnh COVID-19
                                </label>
                            </div>
                            <div className="form-check">
                                <Field className="form-check-input" type="checkbox" value="3" id="defaultCheck13"
                                       name='informationTangent'/>
                                <label className="form-check-label" htmlFor="defaultCheck13">
                                    Người có biểu hiện (Sốt , ho , khó thở , viêm phổi )
                                </label>
                            </div>
                        </div>
                        <button style={{alignItems: "center"}} type="submit" className="btn btn-secondary my-3">Submit
                        </button>
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
            {/* Same as */}
            <ToastContainer />
        </>
    )
}