import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeBtn from './components/HomeBtn'
import LogIn from './components/LogIn'
import Register from './components/Register'
import MainLayout from './layouts/MainLayout'
import PostFl from './components/PostFl'
import Multi from './redux/Multi'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/c" element={<Multi/>} />
        <Route path="/home" element={<HomeBtn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MainLayout/>} />
              <Route path="/post" element={<PostFl/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
