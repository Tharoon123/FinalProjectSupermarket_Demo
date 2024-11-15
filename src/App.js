import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';


function App() {

    
  return (
    <div>
  <BrowserRouter>
       <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
