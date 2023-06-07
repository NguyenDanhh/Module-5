import {Component} from "react";

export class Work extends Component {
    constructor() {
        super();
        this.state = {
            nameWork: '',
            listWork: ['Danh', 'Hung']
        }
    }

    render() {
        return (
            <>
                <h1 style={{textAlign: "center"}}> Todo List</h1>

                <input
                    value={this.state.nameWork}
                    onChange={(event) => this.handChange(event.target.value)}
                />
                <button onClick={() => this.handleAddItem()}>Add</button>

                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Name Product</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.listWork.map((item, index) => (

                                <tr key={index}>
                                    <td>{item}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }

    handChange(value) {
        this.setState({
            nameWork: value
        })
    }


    handleAddItem() {
        let newName = this.state.nameWork
        this.setState({
            nameWork: '',
            listWork: [newName, ...this.state.listWork]
        })
    }

}