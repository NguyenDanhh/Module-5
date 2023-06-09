import 'bootstrap/dist/css/bootstrap.css';
import React, {useEffect, useState} from "react";
import * as service from '../service/LibraryService'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";

export function Library() {
    const [librarys, setLibrarys] = useState([])
    useEffect(() => {
        const disPlay = async () => {
            try {
                const result = await service.getAll()
                setLibrarys(result)
            } catch (error) {
                console.log('error')
            }
        }
        disPlay();
    },[])
    return (
        <>
            <div className='container'>
                <h1>Library</h1>
                <button className="btn btn-primary btn-add"><NavLink to={'/creat'} className='nav-link'>Thêm mới</NavLink></button>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        librarys?.map((values) => (
                            <tr key={values}>
                                <th>{values.title}</th>
                                <td>{values.quantity}</td>
                                <td>
                                    <NavLink className='nav-link'  to={'/update/' + values.id}> Chỉnh sửa</NavLink>
                                </td>
                            </tr>
                        ))
                    }

                    </tbody>
                </table>
            </div>
        </>
    )
}