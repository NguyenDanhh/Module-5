
import './App.css';
import {Library} from "./component/Library";
import {Routes} from 'react-router-dom'
import {Route} from "react-router";
import {CreatBook} from "./component/Create";
import {UpdateBook} from "./component/Update";

function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Library/>}/>
            <Route path='/create' element={<CreatBook/>}/>
            <Route path='/update/:id' element={<UpdateBook/>}/>
        </Routes>
      </>
  );
}

export default App;
