export default function StatisticCard({ value, label }) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">{value}</span>
      <span className="mt-1 text-gray-700 dark:text-gray-300">{label}</span>
    </div>
  )
}
