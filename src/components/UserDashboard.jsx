import { FaExclamationTriangle, FaStar, FaInfoCircle, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

export default function UserDashboard() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 p-6 bg-white rounded-lg shadow pt-32">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, John!</h1>
          <p className="text-gray-600">Here's your health overview and latest insights.</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Start New Assessment
        </button>
      </div>

      <div className="space-y-4">
        {/* Current Risk Level */}
        <div className="border rounded-lg p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="bg-red-200 text-red-700 p-3 rounded-full">
              <FaExclamationTriangle size={24} />
            </div>
            <div>
              <p className="font-semibold text-red-700">moderate</p>
              <p className="text-gray-600 text-sm">Last assessed 2 days ago</p>
            </div>
          </div>
          <div className="w-4 h-4 rounded-full bg-red-600"></div>
        </div>

        {/* Health Score */}
        <div className="border rounded-lg p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="bg-green-200 text-green-700 p-3 rounded-full font-bold text-lg">
              85
            </div>
            <div>
              <p className="font-semibold text-green-700">Good</p>
              <p className="text-gray-600 text-sm">Above average health metrics</p>
            </div>
          </div>
          <FaStar className="text-blue-600" size={20} />
        </div>

        {/* Next Reminder */}
        <div className="border rounded-lg p-4 flex items-center justify-between shadow-sm">
          <div>
            <p className="font-semibold">Next Reminder</p>
            <p className="text-gray-600 text-sm">Tomorrow at 2:00 PM</p>
            <p className="text-gray-600 text-sm">Regular health check-up</p>
          </div>
          <FaInfoCircle className="text-blue-600" size={20} />
        </div>

        {/* Data Security */}
        <div className="border rounded-lg p-4 flex items-center justify-between shadow-sm">
          <div>
            <p className="font-semibold">Data Security</p>
            <p className="text-gray-600 text-sm">Fully Protected</p>
            <p className="text-gray-600 text-sm">Your data is encrypted and secure</p>
          </div>
          <FaShieldAlt className="text-green-600" size={20} />
        </div>

        {/* Recent Assessments */}
        <div className="border rounded-lg p-4 shadow-sm space-y-2">
          <h2 className="font-semibold text-lg mb-2">Recent Assessments</h2>
          <ul>
            <li className="flex items-center justify-between bg-blue-50 p-2 rounded">
              <div className="flex items-center space-x-2">
                <div>
                  <p className="text-sm font-semibold">2024-01-15</p>
                  <p className="text-xs text-gray-600">Risk Level: Low</p>
                </div>
              </div>
              <span className="text-blue-600 font-semibold">85/100</span>
            </li>
            <li className="flex items-center justify-between bg-white p-2 rounded">
              <div>
                <p className="text-sm font-semibold">2024-01-10</p>
                <p className="text-xs text-gray-600">Risk Level: Moderate</p>
              </div>
              <span className="text-blue-600 font-semibold">72/100</span>
            </li>
            <li className="flex items-center justify-between bg-blue-50 p-2 rounded">
              <div>
                <p className="text-sm font-semibold">2024-01-05</p>
                <p className="text-xs text-gray-600">Risk Level: Low</p>
              </div>
              <span className="text-blue-600 font-semibold">88/100</span>
            </li>
          </ul>
          <div className="text-center mt-2">
            <a href="/history" className="text-blue-600 hover:underline text-sm">View All History</a>
          </div>
        </div>

        {/* Personalized Health Tips */}
        <div className="border rounded-lg p-4 shadow-sm space-y-2">
          <h2 className="font-semibold text-lg mb-2">Personalized Health Tips</h2>
          <ul className="space-y-1 text-gray-700 text-sm">
            <li className="flex items-center space-x-2 bg-blue-50 p-2 rounded">
              <FaCheckCircle className="text-blue-600" />
              <span>Maintain a balanced diet with low sugar intake</span>
            </li>
            <li className="flex items-center space-x-2 bg-blue-50 p-2 rounded">
              <FaCheckCircle className="text-blue-600" />
              <span>Exercise for at least 30 minutes daily</span>
            </li>
            <li className="flex items-center space-x-2 bg-blue-50 p-2 rounded">
              <FaCheckCircle className="text-blue-600" />
              <span>Monitor your blood pressure regularly</span>
            </li>
          </ul>
          <div className="text-center mt-2">
            <a href="/education" className="text-blue-600 hover:underline text-sm">View All Tips</a>
          </div>
        </div>
      </div>
    </div>
  );
}
