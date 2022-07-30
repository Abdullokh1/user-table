import './App.css'
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {

  return (
    <>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
