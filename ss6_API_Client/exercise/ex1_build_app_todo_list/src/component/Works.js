import {Form, Formik} from "formik";
import {useEffect} from "react";

export function Work() {
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await async.get('')
            }catch (e) {
                console.log(e)
            }
        }
    })
    return (
        <>
            <Formik onSubmit={} >
                <div className="container">
                    <h1 style={{textAlign : "center"}}>Todo List</h1>
                    <Form>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Enter Todo "
                                      id="floatingTextarea"/>
                            <label htmlFor="floatingTextarea">Comments</label>
                        </div>
                    </Form>
                </div>
            </Formik>
        </>

    )
}