
import './App.css';


import 'bootstrap/dist/css/bootstrap.css';
import {Header} from "./component/content/Header";
import {Footer} from "./component/content/Footer";
import {Body} from "./component/content/Body";
import {Service} from "./component/serviceFurama/Service";
import {FormService} from "./component/serviceFurama/FormService";
import {ListCustomer} from "./component/customer/ListCustomer";


function App() {
    return (
        <>
            <Header/>
            <Body/>
            <Service/>
            {/*<FormService/>*/}
            {/*{ListCustomer}*/}
            <Footer/>
        </>
    )
}

export default App;
