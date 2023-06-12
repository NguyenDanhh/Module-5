import 'bootstrap/dist/css/bootstrap.css';
import React, {useEffect, useState} from "react";
import * as service from '../service/LibraryService'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from "react-router-dom";
import {Form} from "formik";
import {useNavigate} from "react-router";

export function Library() {
    const navigate = useNavigate()
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
    }, [])

    // function getIdDelete(id, title) {
    //     document.getElementById('idDelete').value = id;
    //     document.getElementById('titleDelete').innerHTML = title;
    // }

    return (

        <>
            <div className='container'>
                <h1>Library</h1>
                <button className="btn btn-success btn-add"><NavLink style={{textDecoration : 'none' , color : 'white'}} to={'/creat'} classNameName='nav-link'>Thêm
                    mới</NavLink></button>
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
                                    <button className='nav-link btn btn-secondary'><NavLink
                                        to={'/update/' + values.id}> Chỉnh sửa</NavLink></button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }

                    </tbody>
                </table>
            </div>
            {/*<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">*/}
            {/*    <div className="modal-dialog">*/}
            {/*        <div className="modal-content">*/}
            {/*            <div className="modal-header">*/}
            {/*                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>*/}
            {/*                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>*/}
            {/*            </div>*/}
            {/*            <div className="modal-body">*/}
            {/*                Bạn có muốn xóa <span id='titleDelete'></span> ?*/}
            {/*            </div>*/}
            {/*            <div className="modal-footer">*/}
            {/*                <Form onSubmit={(values) => {*/}
            {/*                    const deleteBook = async ()=>{*/}
            {/*                        await service.deleteById(values)*/}
            {/*                        navigate('/')*/}
            {/*                    }*/}
            {/*                    deleteBook();*/}
            {/*                }}>*/}
            {/*                    <input type="text" id='idDelete'/>*/}
            {/*                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
            {/*                    <button type="submit" className="btn btn-danger">Delete</button>*/}
            {/*                </Form>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </>

    )
}