import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white text-gray-900 shadow-md fixed w-full z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/" className="hover:text-blue-800 transition-colors duration-300">
            GULITA
          </Link>
        </div>

        <button
          className="sm:hidden text-blue-600 hover:text-blue-800 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        <div className="hidden sm:flex items-center gap-6 font-semibold text-lg">
          {['/', '/user'].map((path, i) => {
            const label = {
              '/': 'Home',
              '/user': 'Dashboard',
            }[path];
            return (
              <Link
                key={i}
                to={path}
                className="hover:text-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
              >
                {label}
              </Link>
            );
          })}

          {user ? (
            <div className="flex items-center gap-3 ml-4">
              <span className="text-sm italic text-blue-600">Halo, {user.email}</span>
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 shadow px-4 py-1 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3 ml-4">
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 shadow px-4 py-1 rounded-md text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-600 hover:bg-green-700 shadow px-4 py-1 rounded-md text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden mt-3 flex flex-col gap-4 font-semibold text-lg text-gray-900 bg-white border-t border-gray-200">
          {['/', '/user'].map((path, i) => {
            const label = {
              '/': 'Home',
              '/user': 'Dashboard',
            }[path];
            return (
              <Link
                key={i}
                to={path}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
              >
                {label}
              </Link>
            );
          })}

          {user ? (
            <div className="flex flex-col gap-2">
              <span className="text-sm italic text-blue-600">Halo, {user.email}</span>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="bg-red-600 hover:bg-red-700 shadow px-4 py-1 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 shadow px-4 py-1 rounded-md text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="bg-green-600 hover:bg-green-700 shadow px-4 py-1 rounded-md text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}