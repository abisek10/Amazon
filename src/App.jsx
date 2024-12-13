import './App.css'
import Body from './components/body'
import Navbar from './components/navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/login'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
