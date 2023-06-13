import '../../css/ServiceCss/service.css'
import {useEffect, useState} from "react";
import {getListRoom} from "../../service/RoomService";


export function Service() {
    const [lisRoom , setListRoom] = useState([])

    const displayListRoom = async () => {
        const result = await getListRoom()
        setListRoom(result)
    }


    useEffect(() => {
        displayListRoom()
    },[])
    return (

        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"/>
                <div className="content pt-5 mb-5">
                    <div className="container">
                        <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                            {
                                lisRoom.map((value => {
                                    return(
                                        <div className="col-4">
                                            <div className="card mb-4">
                                                <img
                                                    src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
                                                    alt="..."/>
                                                <div className="card-body">
                                                    <h5 className="card-title fw-semibold">{value.description}</h5>
                                                    <div className="d-flex justify-content-between">
                                                        <p className="card-text">Diện tích phòng {value.swimmingArea} m<sub>2</sub></p>
                                                        <p className="card-text"><i className="fa-solid fa-circle-info"/> Xem
                                                            thêm</p>
                                                    </div>
                                                    <div className="d-flex justify-content-between test-card">
                                                        <i className="fa-solid fa-pen-to-square update-btn"/>
                                                        <i className="fa-solid fa-trash-can trash-can"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }))
                            }
                        </div>
                    </div>
                </div>
            </>

            )
            }