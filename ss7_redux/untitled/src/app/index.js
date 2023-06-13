import axios from "axios";

export default function GetInformation({information}){
    return (
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Deaths</th>
            </tr>
            </thead>
            <tbody>
            {
                information.map((user) => (
                    <tr key={user.date}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.street}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

export const getStaticProps = async () => {
    // fetch dữ liệu từ file system, API, DB,...
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    // Giá trị của `props` sẽ được truyền tới component `Home`
    return {
        props: {
            users: response.data
        }
    }
}
