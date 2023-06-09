import React, {useEffect, useState} from "react";

import axios from "axios";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import * as workService from '../service/WorkService';

export function Work() {
    const [listTodo, setListTodo] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await workService.fillAll()
            setListTodo(result);
        }
        fetchApi();

        // axios.get('http://localhost:8080/todo')
        //     .then((res ) => {
        //         setListTodo(res.data)
        //         alert('Todolist')
        //     })
        //     .catch((error) => {
        //         console.log('Bị lỗi')
        //     })
    }, [])

    return (
        <>
            <Formik

                initialValues={
                    {
                        title: ""
                    }
                }

                onSubmit={(values) => {

                    const create = async () => {
                        // await workService.create(values)
                        await workService.createTodo(values)
                        setListTodo(await workService.fillAll());
                    }
                    create();
                }}>
                <div className="container">
                    <h1 style={{textAlign: "center"}}>Todo List</h1>
                    <Form>
                        <div className="form-floating">
                            <Field className="form-control" placeholder="Enter Todo "
                                   id="floatingTextarea" name='title'/>
                            <button className='btn btn-secondary' type='submit'>Submit</button>
                        </div>
                    </Form>
                </div>
            </Formik>
            <ul>
                {
                    listTodo.map((todo) => (
                        <li key={todo}>{todo.title}</li>
                    ))
                }
            </ul>
        </>

    )
}