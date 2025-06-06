import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import SymptomChecklist from './pages/SymptomChecklist'
import OptionalData from './pages/OptionalData'
import Result from './pages/Result'
import History from './pages/History'
import Education from './pages/Education'
import Login from './pages/Login'
import Register from './pages/Register'
import User from './pages/User'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/symptoms" element={<SymptomChecklist />} />
          <Route path="/optional-data" element={<OptionalData />} />
          <Route path="/result" element={<Result />} />
          <Route path="/history" element={<History />} />
          <Route path="/education" element={<Education />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
