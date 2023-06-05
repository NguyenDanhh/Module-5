import logo from './logo.svg';
import './App.css';
import students from './data/index';

function App() {

    return (
        <>
            <h1 style={{textAlign: "center"}}>Students</h1>
            <table>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((students, index) =>
                        <tr key={index}>
                            <td>{students.company}</td>
                            <td>{students.contact}</td>
                            <td>{students.country}</td>
                        </tr>
                     )}
                </tbody>
            </table>
        </>
    );
}

export default App;
