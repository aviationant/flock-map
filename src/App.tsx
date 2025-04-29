import { About, Homepage } from './pages';
import {
  Routes,
  Route,
} from "react-router";

import './App.css';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
