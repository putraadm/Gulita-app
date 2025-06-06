import FeatureCard from '../components/FeatureCard'
import StatisticCard from '../components/StatisticCard'
import { FaCheckCircle, FaUserShield, FaUserFriends, FaRobot, FaFileAlt, FaClock } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 space-y-15">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-lg p-10 shadow-lg min-h-[520px]">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Early Diabetes Detection Made <span className="text-blue-600">Simple</span>
          </h1>
          <p className="text-gray-700 mb-6 max-w-md">
            GULITA uses advanced AI technology to help detect early signs of diabetes through simple, non-invasive testing. Take control of your health with our innovative screening platform.
          </p>
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => window.location.href = '/symptoms'}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Get Started
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
          <div className="flex space-x-8 text-blue-600 text-sm font-semibold">
            <StatisticCard value="95%" label="Accuracy Rate" />
            <StatisticCard value="10K+" label="Tests Completed" />
            <StatisticCard value="24/7" label="Available" />
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="w-110 h-70 bg-blue-300 rounded-2xl flex items-center justify-center text-white font-semibold text-lg shadow-lg relative">
            Diabetes Detection Dashboard
            <div className="absolute top-2 right-2 bg-blue-600 rounded-full p-1 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About GULITA Section */}
      <section className="text-center space-y-8 bg-white rounded-lg p-10 shadow-lg min-h-[530px]">
        <h2 className="text-3xl font-bold text-gray-900">About GULITA</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          We are revolutionizing diabetes detection through cutting-edge technology and accessible healthcare solutions.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<FaCheckCircle size={24} />}
            title="Accurate Detection"
            description="Our AI-powered system provides highly accurate diabetes risk assessment using advanced machine learning algorithms."
          />
          <FeatureCard
            icon={<FaUserFriends size={24} />}
            title="User-Friendly"
            description="Simple, intuitive interface designed for users of all ages and technical backgrounds to easily navigate and understand."
          />
          <FeatureCard
            icon={<FaUserShield size={24} />}
            title="Secure & Private"
            description="Your health data is protected with enterprise-grade security and privacy measures, ensuring complete confidentiality."
          />
        </div>
      </section>

      {/* Key Features Section */}
      <section className="text-center bg-white rounded-lg p-10 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-6">
          Discover the powerful features that make GULITA the leading diabetes detection platform.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <FeatureCard
              icon={<FaRobot size={20} />}
              title="AI-Powered Analysis"
              description="Advanced machine learning algorithms analyze multiple health indicators for comprehensive diabetes risk assessment."
            />
            <FeatureCard
              icon={<FaFileAlt size={20} />}
              title="Detailed Reports"
              description="Comprehensive health reports with actionable insights and personalized recommendations for better health management."
            />
            <FeatureCard
              icon={<FaClock size={20} />}
              title="Real-time Results"
              description="Get instant results and immediate feedback on your diabetes risk assessment with our fast processing system."
            />
          </div>
          <div className="bg-blue-300 rounded-2xl h-72 flex items-center justify-center text-white font-semibold text-xl shadow-lg">
            Feature Showcase
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Simple steps to get your diabetes risk assessment in minutes.
        </p>
        <div className="mt-12 flex justify-center items-center space-x-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-4 w-64">
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg">
              1
            </div>
            <h3 className="font-bold text-lg">Input Health Data</h3>
            <p className="text-gray-600 text-sm">
              Enter your basic health information including age, weight, family history, and lifestyle factors through our secure form.
            </p>
          </div>
          <div className="flex-1 border-t border-gray-300"></div>
          <div className="flex flex-col items-center space-y-4 w-64">
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg">
              2
            </div>
            <h3 className="font-bold text-lg">AI Analysis</h3>
            <p className="text-gray-600 text-sm">
              Our advanced AI system processes your data using proven medical algorithms to assess your diabetes risk accurately.
            </p>
          </div>
          <div className="flex-1 border-t border-gray-300"></div>
          <div className="flex flex-col items-center space-y-4 w-64">
            <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg">
              3
            </div>
            <h3 className="font-bold text-lg">Get Results</h3>
            <p className="text-gray-600 text-sm">
              Receive your comprehensive diabetes risk report with personalized recommendations and next steps for your health journey.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white rounded-lg p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Health?</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Join thousands of users who have already taken the first step towards better health with GULITA diabetes detection.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Start Your Assessment
        </button>
      </section>

      {/* Contact Us Section */}
      <section className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Contact Us</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Have questions? We are here to help you on your health journey.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 bg-indigo-100 p-4 rounded-lg">
              <div className="bg-indigo-300 p-3 rounded-lg">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-700">support@gluta.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-indigo-100 p-4 rounded-lg">
              <div className="bg-indigo-300 p-3 rounded-lg">
                <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-gray-700">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-indigo-100 p-4 rounded-lg">
              <div className="bg-indigo-300 p-3 rounded-lg">
                <svg className="w-4 h-4 text-black" fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 395.71 395.71" xmlSpace="preserve">
                  <g>
                    <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
                      c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
                      C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
                      c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
                  </g>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Address</p>
                <p className="text-gray-700">123 Health St, Medical District</p>
              </div>
            </div>
          </div>
          <form className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

