import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import ListUser from "./component/ListUser";
import 'bootstrap/dist/css/bootstrap.css';
import ManageUser from "./component/ListUser";


function App() {
    return (
        <>
            {/*<div className='container'>*/}
            {/*    <h1>User list</h1>*/}
            {/*    <nav>*/}
            {/*        <button className='btn btn-secondary'>*/}
            {/*            <Link to='/users' className='test'>Get users</Link>*/}
            {/*        </button>*/}
            {/*    </nav>*/}
            {/*</div>*/}

            {/*<Routes>*/}
            {/*    <Route path='/users' element={<ManageUser/>}/>*/}
            {/*</Routes>*/}
            <ManageUser/>
        </>

    );
}

export default App;
