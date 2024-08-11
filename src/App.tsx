import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Events } from './pages/Events'
import { SingleEvent } from './pages/SingleEvent'

function App() {

  return <div>
    <BrowserRouter>
    <Routes>
      <Route path='/register' element = {<Register />} />
      <Route path='/login' element = {<Login />} />
      <Route path='events' element = {<Events />} />
      <Route path='/singleevent/' element = {<SingleEvent />} />
    </Routes>
    </BrowserRouter>
  </div>
}

export default App
