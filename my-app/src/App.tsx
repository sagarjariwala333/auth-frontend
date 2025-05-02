import { BrowserRouter, Routes, Route } from 'react-router'
import DashBoard from './pages/dashboard'
import LoginPage from './pages/login/LoginPage'
import { useAuth } from './context/AuthContext'

function App() {

  const { token } = useAuth()

  return (
    <>
    <BrowserRouter>
            <Routes>
                <Route path="/" element={ token ? <DashBoard/> : <LoginPage/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
