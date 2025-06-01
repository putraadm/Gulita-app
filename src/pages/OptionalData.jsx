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
    <div className="container mx-auto p-4 max-w-md">
      <h2 className="text-2xl font-bold mb-4">Data Opsional</h2>
      <div className="mb-4">
        <label className="block mb-1">BMI (Body Mass Index)</label>
        <input
          type="number"
          step="0.1"
          value={bmi}
          onChange={(e) => setBmi(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Masukkan BMI Anda"
        />
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={familyHistory}
            onChange={() => setFamilyHistory(!familyHistory)}
            className="mr-2"
          />
          Riwayat keluarga dengan diabetes
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Hasil Tes Gula Darah (mg/dL)</label>
        <input
          type="number"
          value={bloodSugarTest}
          onChange={(e) => setBloodSugarTest(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Masukkan hasil tes gula darah"
        />
      </div>
      <button
        onClick={handleNext}
        className="bg-blue-600 text-white p-2 rounded"
      >
        Lihat Hasil
      </button>
    </div>
  )
}
