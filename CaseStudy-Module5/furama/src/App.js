
import './App.css';


import 'bootstrap/dist/css/bootstrap.css';
import {Header} from "./component/content/Header";
import {Footer} from "./component/content/Footer";
import {Body} from "./component/content/Body";
import {Villas} from "./component/serviceFurama/villa/Villas";
import {CreateVilla} from "./component/serviceFurama/villa/CreateVilla";
import {ListCustomer} from "./component/customer/ListCustomer";
import {CreateCustomer} from "./component/customer/CreateCustomer";
import {CreateContact} from "./component/Contact/CreateContact";
import {ListContact} from "./component/Contact/ListContact";
import {Routes , Route} from 'react-router-dom'
import {UpdateCustomer} from "./component/customer/UpdateCustomer";
import {UpdateContact} from "./component/Contact/UpdateContact";
import {UpdateVilla} from "./component/serviceFurama/villa/UpdateVilla";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Body/>}/>

                <Route path='/customer' element={<ListCustomer/>}/>
                <Route path='/create-customer' element={<CreateCustomer/>} />
                <Route path='/update-customer/:id' element={<UpdateCustomer/>} />

                <Route path='/contact' element={<ListContact/>}/>
                <Route path='/create-contact' element={<CreateContact/>} />
                <Route path='/update-contact/:id' element={<UpdateContact/>} />

                <Route path='/room' element={<Villas/>}/>
                <Route path='/create-room' element={<CreateVilla/>} />
                <Route path='/update-room/:id' element={<UpdateVilla/>} />

                {/*<Route path='/villa' element={<ListVilla/>}/>*/}
                {/*<Route path='/create-villa' element={<CreateVilla/>} />*/}
                {/*<Route path='/update-villa/:id' element={<UpdateVilla/>} />*/}

                {/*<Route path='/house' element={<ListHouse/>}/>*/}
                {/*<Route path='/create-house' element={<CreateHouse/>} />*/}
                {/*<Route path='/update-house/:id' element={<UpdateHouse/>} />*/}
            </Routes>
            {/*<Footer/>*/}




            {/*<Villas/>*/}
            {/*<CreateVilla/>*/}
            {/*<ListCustomer/>*/}
            {/*<CreateCustomer/>*/}
            {/*<CreateContact/>*/}
            {/*<ListContact/>*/}
        </>

    )
}

export default App;
