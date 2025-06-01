// import { useContext, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { AuthContext } from '../context/AuthContext'
// import { FiMenu, FiX } from 'react-icons/fi'

// export default function Navbar() {
//   const { user, logout } = useContext(AuthContext)
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleMenu = () => setIsOpen(!isOpen)

//   const navLinks = [
//     { path: '/', label: 'Home' },
//     { path: '/history', label: 'Riwayat' },
//     { path: '/education', label: 'Edukasi' },
//   ]

//   return (
//     <nav className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white px-6 py-4 shadow-lg sticky top-0 z-50">
//       <div className="flex justify-between items-center">
//         <div className="text-3xl font-extrabold tracking-wide drop-shadow-lg select-none">
//           <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">
//             GULITA
//           </Link>
//         </div>

//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
//           >
//             {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
//           </button>
//         </div>

//         <div className="hidden md:flex flex-wrap items-center gap-6 font-semibold text-lg">
//           {navLinks.map((link, i) => (
//             <Link
//               key={i}
//               to={link.path}
//               className="hover:text-yellow-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
//             >
//               {link.label}
//             </Link>
//           ))}

//           {user ? (
//             <div className="flex items-center gap-3 ml-6">
//               <span className="text-sm italic text-yellow-200">Halo, {user.email}</span>
//               <button
//                 onClick={logout}
//                 className="bg-red-600 hover:bg-red-700 shadow-md text-white px-4 py-1 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <div className="flex items-center gap-3 ml-6">
//               <Link
//                 to="/login"
//                 className="bg-blue-600 hover:bg-blue-700 shadow-md px-4 py-1 rounded-md text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="bg-green-600 hover:bg-green-700 shadow-md px-4 py-1 rounded-md text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//               >
//                 Register
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>

//       {isOpen && (
//         <div className="mt-4 flex flex-col gap-4 font-semibold text-lg md:hidden">
//           {navLinks.map((link, i) => (
//             <Link
//               key={i}
//               to={link.path}
//               onClick={() => setIsOpen(false)}
//               className="hover:text-yellow-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
//             >
//               {link.label}
//             </Link>
//           ))}

//           {user ? (
//             <div className="flex flex-col gap-2 mt-2">
//               <span className="text-sm italic text-yellow-200">Halo, {user.email}</span>
//               <button
//                 onClick={() => {
//                   logout()
//                   setIsOpen(false)
//                 }}
//                 className="bg-red-600 hover:bg-red-700 shadow-md text-white px-4 py-1 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <div className="flex flex-col gap-2 mt-2">
//               <Link
//                 to="/login"
//                 onClick={() => setIsOpen(false)}
//                 className="bg-blue-600 hover:bg-blue-700 shadow-md px-4 py-1 rounded-md text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 onClick={() => setIsOpen(false)}
//                 className="bg-green-600 hover:bg-green-700 shadow-md px-4 py-1 rounded-md text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//               >
//                 Register
//               </Link>
//             </div>
//           )}
//         </div>
//       )}
//     </nav>
//   )
// }

import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white px-6 py-4 shadow-lg sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-3xl font-extrabold tracking-wide drop-shadow-lg select-none">
          <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">
            GULITA
          </Link>
        </div>

        <button
          className="sm:hidden text-yellow-400 hover:text-yellow-300 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        <div className="hidden sm:flex items-center gap-6 font-semibold text-lg">
          {['/', '/history', '/education'].map((path, i) => {
            const label = {
              '/': 'Home',
              '/history': 'Riwayat',
              '/education': 'Edukasi',
            }[path];
            return (
              <Link
                key={i}
                to={path}
                className="hover:text-yellow-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
              >
                {label}
              </Link>
            );
          })}

          {user ? (
            <div className="flex items-center gap-3 ml-4">
              <span className="text-sm italic text-yellow-200">Halo, {user.email}</span>
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
                className="bg-blue-600 hover:bg-blue-700 shadow px-4 py-1 rounded-md text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-600 hover:bg-green-700 shadow px-4 py-1 rounded-md text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden mt-3 flex flex-col gap-4 font-semibold text-lg">
          {['/', '/history', '/education'].map((path, i) => {
            const label = {
              '/': 'Home',
              '/history': 'Riwayat',
              '/education': 'Edukasi',
            }[path];
            return (
              <Link
                key={i}
                to={path}
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
              >
                {label}
              </Link>
            );
          })}

          {user ? (
            <div className="flex flex-col gap-2">
              <span className="text-sm italic text-yellow-200">Halo, {user.email}</span>
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
                className="bg-blue-600 hover:bg-blue-700 shadow px-4 py-1 rounded-md text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="bg-green-600 hover:bg-green-700 shadow px-4 py-1 rounded-md text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
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