import './styles.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Historial from './Components/Historial'
import Header from './Components/Header'
import Register from './Components/Register'
import Login from './Components/Login'
import PrivateRoute from './Components/Auth/PrivateRoute'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path='/historial' element={<Historial />} />
        </Route>
        <Route path='/registro' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
