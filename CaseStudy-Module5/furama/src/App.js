
import './App.css';


import 'bootstrap/dist/css/bootstrap.css';
import {Header} from "./component/content/Header";
import {Footer} from "./component/content/Footer";
import {Body} from "./component/content/Body";
import {Service} from "./component/serviceFurama/Service";
import {FormService} from "./component/serviceFurama/FormService";
import {ListCustomer} from "./component/customer/ListCustomer";
import {CreateCustomer} from "./component/customer/CreateCustomer";
import {CreateContact} from "./component/Contact/CreateContact";
import {ListContact} from "./component/Contact/ListContact";
import {Routes , Route} from 'react-router-dom'
import {UpdateCustomer} from "./component/customer/UpdateCustomer";
import {UpdateContact} from "./component/Contact/UpdateContact";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Body/>}/>
                <Route path='/room' element={<Service/>}/>
                <Route path='/customer' element={<ListCustomer/>}/>
                <Route path='/create-customer' element={<CreateCustomer/>} />
                <Route path='/update-customer/:id' element={<UpdateCustomer/>} />
                <Route path='/contact' element={<ListContact/>}/>
                <Route path='/create-contact' element={<CreateContact/>} />
                <Route path='/update-contact/:id' element={<UpdateContact/>} />
            </Routes>
            {/*<Footer/>*/}




            {/*<Service/>*/}
            {/*<FormService/>*/}
            {/*<ListCustomer/>*/}
            {/*<CreateCustomer/>*/}
            {/*<CreateContact/>*/}
            {/*<ListContact/>*/}
        </>

    )
}

export default App;
