export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex space-x-4 p-4 bg-white rounded-lg shadow-md my-10">
      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-blue-300 text-black">
        {icon}
      </div>
      <div>
        <h3 className="text-md font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 max-w-xs">{description}</p>
      </div>
    </div>
  )
}
