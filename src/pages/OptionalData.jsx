import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function OptionalData() {
  const [bmi, setBmi] = useState('')
  const [familyHistory, setFamilyHistory] = useState(false)
  const [bloodSugarTest, setBloodSugarTest] = useState('')

  const navigate = useNavigate()

  const handleNext = () => {
    const optionalData = {
      bmi,
      familyHistory,
      bloodSugarTest,
    }
    localStorage.setItem('optionalData', JSON.stringify(optionalData))
    navigate('/result')
  }

  return (
    <div className='container mx-auto p-6 max-w-xl bg-white min-h-screen pt-32'>
      <div className="p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">
          Data Opsional
        </h2>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-700">BMI (Body Mass Index)</label>
          <input
            type="number"
            step="0.1"
            value={bmi}
            onChange={(e) => setBmi(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Masukkan BMI Anda"
          />
        </div>

        <div className="mb-6">
          <label className="inline-flex items-center text-gray-700 font-semibold">
            <input
              type="checkbox"
              checked={familyHistory}
              onChange={() => setFamilyHistory(!familyHistory)}
              className="mr-2 accent-blue-600"
            />
            <span>Riwayat keluarga dengan diabetes</span>
          </label>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-semibold text-gray-700">Hasil Tes Gula Darah (mg/dL)</label>
          <input
            type="number"
            value={bloodSugarTest}
            onChange={(e) => setBloodSugarTest(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Masukkan hasil tes gula darah"
          />
        </div>

        <div className="text-center">
          <button
            onClick={handleNext}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition-colors duration-300"
          >
            Lihat Hasil
          </button>
        </div>
      </div>
    </div>
  )
}
