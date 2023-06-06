import {Component} from "react"

export class Student extends Component {
    constructor() {
        super();
        this.state = {
            listStudent: [{
                id: 1,
                name: "danh",
                age: 18,
                address: "Đà Nẵng"
            },
                {
                    id: 2,
                    name: "Hưng",
                    age: 18,
                    address: "Đà Nẵng"
                }
            ]
        }
    }

    render() {
        return (
            <>
                <h1 style={{textAlign: "center"}}>List Students</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Address</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.listStudent.map((item) => (
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.address}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

