import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { FaGoogle, FaFacebookF, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(null)
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      if (!response.ok) {
        throw new Error('Registrasi gagal')
      }
      const data = await response.json()
      login(data.user)
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="container min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-sm p-10">
        <h2 className="text-5xl font-extrabold mb-8 text-center text-gray-900">Register</h2>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Enter your username</label>
            <input type="text" placeholder="Username" required className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Enter your email address</label>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter your Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Kata sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
              tabIndex={-1}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-400 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg shadow-md transition duration-200"
          >
            Register
          </button>
        </form>
        <div className="mt-8 flex items-center space-x-4 justify-center">
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
            <FaGoogle className="text-red-500" />
            <span className="text-sm text-gray-700">Register with Google</span>
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg hover:bg-blue-700">
            <FaFacebookF className="text-white" />
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-black rounded-lg hover:bg-gray-900">
            <FaApple className="text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
