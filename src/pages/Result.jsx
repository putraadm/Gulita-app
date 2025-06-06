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
    <div className='container mx-auto max-w-screen flex justify-center bg-white text-gray-900 pt-24'>
      <div className="p-6 max-w-md bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-extrabold mb-6 text-center">
          Hasil Prediksi Risiko Diabetes
        </h2>
        {risk ? (
          <p className="text-lg mb-6">
            Tingkat risiko diabetes Anda adalah:{' '}
            <strong
              className={
                risk === 'Tinggi'
                  ? 'text-yellow-600'
                  : risk === 'Sedang'
                  ? 'text-yellow-500'
                  : 'text-yellow-400'
              }
            >
              {risk}
            </strong>
          </p>
        ) : (
          <p className="text-gray-500">Memproses...</p>
        )}
        <button
          onClick={handleBack}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-colors duration-300"
        >
          Kembali
        </button>
      </div>
    </div>
  )
}
