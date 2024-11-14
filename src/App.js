import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import CheckOut from './Components/CheckOut';

function App() {

    //asdfadsfadsf
  return (
    <div>
  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/CheckOut' element={<CheckOut/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
    
  );
}

export default App;
