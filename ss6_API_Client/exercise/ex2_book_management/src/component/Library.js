import 'bootstrap/dist/css/bootstrap.css';

export function Library() {
    return (
        <>
            <div className='container'>
                <h1>Library</h1>
                <button className="btn btn-secondary">Create</button>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>1</th>
                        <td>Mark</td>
                        <td>
                            <button className="btn btn-primary">Update</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}