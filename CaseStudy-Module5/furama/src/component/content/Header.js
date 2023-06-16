import '../../css/ContentCss/header.css'
import {NavLink} from "react-router-dom";

export function Header() {

    return (
        <>
            <div className="service">
                <div className="header">
                    <div className="container d-flex justify-content-between h-100">
                        <div className="left d-flex h-100">
                            <div className="logo h-100">
                                {/*<img*/}
                                {/*    className="h-100"*/}
                                {/*    src="https://furama-booking.com/wp-content/uploads/2021/10/logo-furama-resort-villa.png"*/}
                                {/*    alt=""*/}
                                {/*/>*/}
                            </div>
                            <div className="menu d-flex align-items-center">
                                <ul className="d-flex text-uppercase">
                                    <li>
                                        <NavLink to="/">Trang chủ</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                 data-bs-toggle="dropdown" aria-expanded="false">Dịch vụ</a>
                                        <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuLink">
                                            <li><NavLink className="dropdown" to="/room">Room</NavLink></li>
                                            <li><NavLink className="dropdown">House</NavLink></li>
                                            <li><NavLink className="dropdown">Villa</NavLink></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink to='/contact'>Hợp đồng</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/customer'>Khách hàng</NavLink>
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
            </div>
        </>
    )
}