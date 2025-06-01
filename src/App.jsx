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

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div id="root" className="w-full">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/symptoms" element={<SymptomChecklist />} />
          <Route path="/optional-data" element={<OptionalData />} />
          <Route path="/result" element={<Result />} />
          <Route path="/history" element={<History />} />
          <Route path="/education" element={<Education />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
