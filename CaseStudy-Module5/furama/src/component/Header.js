import '../css/header.css'

export const Header = () => {

    return (
        <>
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
            </div>
        </>
    )
}