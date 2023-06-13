
import './App.css';


import 'bootstrap/dist/css/bootstrap.css';
import {Header} from "./component/content/Header";
import {Footer} from "./component/content/Footer";
import {Body} from "./component/content/Body";
import {Service} from "./component/serviceFurama/Service";
import {FormService} from "./component/serviceFurama/FormService";
import {ListCustomer} from "./component/customer/ListCustomer";
import {FormCustomer} from "./component/customer/FormCustomer";
import {FormContact} from "./component/Contact/FormContact";
import {ListContact} from "./component/Contact/ListContact";
import {Routes , Route} from 'react-router-dom'

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Body/>}></Route>
                <Route path='/room' element={<Service/>}/>
                <Route path='/contact' element={<ListContact/>}/>
                <Route path='/customer' element={<ListCustomer/>}/>
                <Route path='/create-customer' element={<FormCustomer/>} />
            </Routes>
            {/*<Footer/>*/}




            {/*<Service/>*/}
            {/*<FormService/>*/}
            {/*<ListCustomer/>*/}
            {/*<FormCustomer/>*/}
            {/*<FormContact/>*/}
            {/*<ListContact/>*/}
        </>

    )
}

export default App;
