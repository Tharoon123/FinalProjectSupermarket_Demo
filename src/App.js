import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';

function App() {

    //asdfadsfadsf
  return (
    <div>
      <h1>
        This is the Heading
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
    
  );
}

export default App;
