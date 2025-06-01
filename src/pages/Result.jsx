import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Result() {
  const [risk, setRisk] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const symptoms = JSON.parse(localStorage.getItem('selectedSymptoms')) || []
    const optionalData = JSON.parse(localStorage.getItem('optionalData')) || {}

    let riskScore = symptoms.length
    if (optionalData.bmi && optionalData.bmi > 25) riskScore += 1
    if (optionalData.familyHistory) riskScore += 1
    if (optionalData.bloodSugarTest && optionalData.bloodSugarTest > 140) riskScore += 2

    let riskLevel = 'Rendah'
    if (riskScore >= 4) riskLevel = 'Tinggi'
    else if (riskScore >= 2) riskLevel = 'Sedang'

    setRisk(riskLevel)
  }, [])

  const handleBack = () => {
    navigate('/optional-data')
  }

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h2 className="text-2xl font-bold mb-4">Hasil Prediksi Risiko Diabetes</h2>
      {risk ? (
        <p className="text-lg">
          Tingkat risiko diabetes Anda adalah: <strong>{risk}</strong>
        </p>
      ) : (
        <p>Memproses...</p>
      )}
      <button
        onClick={handleBack}
        className="mt-4 bg-gray-600 text-white p-2 rounded"
      >
        Kembali
      </button>
    </div>
  )
}
