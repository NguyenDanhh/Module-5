import logo from './logo.svg';
import './App.css';
import './footerAndHeader/footer.css'
import './footerAndHeader/header.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div className="service">
            <div className="header">
                <div className="container d-flex justify-content-between h-100">
                    <div className="left d-flex h-100">
                        <div className="logo h-100">
                            <img
                                className="h-100"
                                src="https://furama-booking.com/wp-content/uploads/2021/10/logo-furama-resort-villa.png"
                                alt=""
                            />
                        </div>
                        <div className="menu d-flex align-items-center">
                            <ul className="d-flex text-uppercase">
                                <li>
                                    <a href="">Trang chủ</a>
                                </li>
                                <li>
                                    <a href="">Phòng resort</a>
                                </li>
                                <li>
                                    <a href="">Phòng villa</a>
                                </li>
                                <li>
                                    <a href="">Tiện ích</a>
                                </li>
                                <li>
                                    <a href="">Tin tức</a>
                                </li>
                                <li>
                                    <a href="">Liên hệ furama</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right d-flex justify-content-between align-items-center">
                        <div className="search">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="phone-number">
                            <i className="fa-solid fa-phone"></i>
                            <span>+84934541444</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content mt-5 mb-5">
                <section className="vh-100 gradient-custom">
                    <div className="container py-5 h-100">
                        <div className="row justify-content-center align-items-center h-100">
                            <div className="col-12 col-lg-9 col-xl-7">
                                <div className="card card-registration" style={{borderRadius: "15px"}}>
                                    <div className="card-body p-4 p-md-5">
                                        <h3 className="title mb-4 pb-2 pb-md-0 mb-md-5">
                                            Create new customer
                                        </h3>
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input
                                                            type="text"
                                                            id="firstName"
                                                            required
                                                            className="form-control form-control-lg"
                                                        />
                                                        <label className="form-label" htmlFor="firstName"
                                                        >Full name</label
                                                        >
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input
                                                            type="number"
                                                            id="lastName"
                                                            required
                                                            className="form-control form-control-lg"
                                                        />
                                                        <label className="form-label" htmlFor="lastName"
                                                        >ID number</label
                                                        >
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4 d-flex align-items-center">
                                                    <div className="form-outline datepicker w-100">
                                                        <input
                                                            type="date"
                                                            className="form-control form-control-lg"
                                                            id="birthdayDate"
                                                            required
                                                        />
                                                        <label htmlFor="birthdayDate" className="form-label"
                                                        >Birthday</label
                                                        >
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <h6 className="mb-2 pb-1">Gender:</h6>

                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="inlineRadioOptions"
                                                            id="femaleGender"
                                                            value="option1"
                                                            checked
                                                        />
                                                        <label className="form-check-label" htmlFor="femaleGender"
                                                        >Female</label
                                                        >
                                                    </div>

                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="inlineRadioOptions"
                                                            id="maleGender"
                                                            value="option2"
                                                        />
                                                        <label className="form-check-label" htmlFor="maleGender"
                                                        >Male</label
                                                        >
                                                    </div>

                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="inlineRadioOptions"
                                                            id="otherGender"
                                                            value="option3"
                                                        />
                                                        <label className="form-check-label" htmlFor="otherGender"
                                                        >Other</label
                                                        >
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4 pb-2">
                                                    <div className="form-outline">
                                                        <input
                                                            type="email"
                                                            id="emailAddress"
                                                            required
                                                            className="form-control form-control-lg"
                                                        />
                                                        <label className="form-label" htmlFor="emailAddress"
                                                        >Email</label
                                                        >
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4 pb-2">
                                                    <div className="form-outline">
                                                        <input
                                                            type="tel"
                                                            id="phoneNumber"
                                                            required
                                                            className="form-control form-control-lg"
                                                        />
                                                        <label className="form-label" htmlFor="phoneNumber"
                                                        >Phone Number</label
                                                        >
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4 pb-2">
                                                    <div className="form-outline">
                                                        <input
                                                            type="text"
                                                            id="address"
                                                            required
                                                            className="form-control form-control-lg"
                                                        />
                                                        <label className="form-label" htmlFor="address"
                                                        >Address</label
                                                        >
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4 pb-2">
                                                    <select className="select form-control-lg">
                                                        <option value="1" disabled>Choose option</option>
                                                        <option value="2">Diamond</option>
                                                        <option value="3">Platinum</option>
                                                        <option value="4">Gold</option>
                                                        <option value="5">Silver</option>
                                                        <option value="6">Member</option>
                                                    </select>
                                                    <label className="form-label select-label"
                                                    >Choose option</label
                                                    >
                                                </div>
                                            </div>

                                            <div className="mt-4 pt-2 d-flex">
                                                <input
                                                    className="submit-form btn btn-primary btn-lg flex-grow-1"
                                                    type="submit"
                                                    value="Submit"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <footer className="text-center text-lg-start bg-light text-muted">

                <section className="" style={{backgroundColor: " #003680; height: auto"}}>
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div
                                className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"
                                style={{backgroundColor: "#f3f3f3; width: 320px"}}
                            >

                                <h6
                                    className="text-uppercase fw-bold mb-4"
                                    style={{
                                        marginTop: "50px",
                                        color: "#cbbe73",
                                        fontSize: "25px",
                                        textAlign: "center"
                                    }}
                                >
                                    <i className="fas fa-gem me-3"></i>Hướng dẫn di chuyển
                                </h6>
                                <p style={{fontSize: " 13px"}}>
                                    Khu nghỉ dưỡng Furama là cơ sở hàng đầu để khám phá một trong
                                    những điểm đến hấp dẫn nhất Châu Á. Chỉ cách Đà Nẵng một quãng
                                    lái xe ngắn là bốn Di sản Văn hóa Thế giới được UNESCO công
                                    nhận
                                </p>
                                <button
                                    style={{
                                        margin: "auto",
                                        display: "block",
                                        backgroundColor: "#003680",
                                        fontSize: " 16px",
                                        padding: "5px",
                                        border: "none",
                                        color: "white",
                                        height: "40px"
                                    }}
                                >
                                    Xem trên bản đồ
                                </button>
                                <p style={{color: "#cbbe73", marginTop: "15px"}}>Địa điểm</p>
                                <table className="table" style={{fontSize: "13px"}}>
                                    <tr>
                                        <td>1.Cố đô Huế</td>
                                        <td>2 tiếng</td>
                                    </tr>
                                    <tr>
                                        <td>2.Phố cổ Hội An</td>
                                        <td>30 phút</td>
                                    </tr>
                                    <tr>
                                        <td>3.Thánh địa Mỹ Sơn</td>
                                        <td>90 phút</td>
                                    </tr>
                                    <tr>
                                        <td>4.Động Phong Nha</td>
                                        <td>3 tiếng</td>
                                    </tr>
                                </table>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <ul
                                    className="menu-footer color-fff"
                                    style={{marginTop: "50px", marginLeft: "5%"}}
                                >
                                    <li>Giá công bố</li>
                                    <li>LifeStyle blog</li>
                                    <li>Tuyển dụng</li>
                                    <li>Liên hệ</li>
                                </ul>
                                <img
                                    width="300%"
                                    style={{marginTop: "170px", marginLeft: "-70px"}}
                                    src="https://furamavietnam.com/wp-content/uploads/2023/03/Ariyana-Tourism-Complex-02-500x131.png"
                                />
                            </div>

                            <div
                                className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 color-fff"
                                style={{marginTop: "50px"}}
                            >

                                <h6 className="text-uppercase fw-bold mb-4" style={{color: "#cbbe73"}}>
                                    Liên hệ
                                </h6>
                                <p style={{fontSize: "12px"}}>
                                    <i className="fas fa-home me-3"></i>103 - 105 Vo Nguyen Giap
                                    Street, Khue My Ward, Ngu Hanh Son District, Danang City,
                                    Vietnam Tel.: 84-236-3847 333/888 * Fax: 84-236-3847 666
                                    Email: reservation@furamavietnam.com * www.furamavietnam.com
                                    GDS Codes: Amadeus-GD DADFUR, Galileo/Apollo-GD 16236,
                                    Sabre-GD 032771, Worldspan- GD DADFU
                                </p>
                                <hr/>
                                <i
                                    className="fa-brands fa-facebook"
                                    style={{width: "32px", height: "32px", float: "left"}}
                                    className="color-fff"
                                ></i><i
                                className="fa-brands fa-facebook"
                                style={{width: "32px", height: "32px", float: "left"}}
                                className="color-fff"
                            ></i><i
                                className="fa-brands fa-facebook"
                                style={{width: "32px", height: "32px", float: "left"}}
                                className="color-fff"
                            ></i>

                            </div>


                        </div>

                    </div>
                </section>

            </footer>
        </div>
    );
}

export default App;
