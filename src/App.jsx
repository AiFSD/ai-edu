import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeBtn from './components/HomeBtn'
import LogIn from './components/LogIn'
import Register from './components/Register'
import MainLayout from './layouts/MainLayout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeBtn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Main" element={<MainLayout/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
