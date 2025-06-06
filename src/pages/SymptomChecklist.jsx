import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const symptomsList = [
  'Sering merasa haus',
  'Sering buang air kecil',
  'Penurunan berat badan tanpa sebab',
  'Penglihatan kabur',
  'Luka sulit sembuh',
  'Sering merasa lelah',
  'Kesemutan atau mati rasa pada tangan/kaki',
]

export default function SymptomChecklist() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([])
  const navigate = useNavigate()

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    )
  }

  const handleNext = () => {
    localStorage.setItem('selectedSymptoms', JSON.stringify(selectedSymptoms))
    navigate('/optional-data')
  }

  return (
    <div className='container mx-auto p-6 max-w-3xl bg-white rounded-xl pt-24'>
      <div className="p-6 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-900">Checklist Gejala</h2>
        <ul className="mb-6 space-y-4">
          {symptomsList.map((symptom) => (
            <li key={symptom}>
              <label className="flex items-center bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedSymptoms.includes(symptom)}
                  onChange={() => toggleSymptom(symptom)}
                  className="form-checkbox h-5 w-5 text-blue-600 focus:ring-blue-300 accent-blue-600 mr-3"
                />
                <span className="text-lg text-gray-900">{symptom}</span>
              </label>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <button
            onClick={handleNext}
            disabled={selectedSymptoms.length === 0}
            className={`px-6 py-3 rounded-full font-bold shadow-lg transition-colors duration-300
              ${
                selectedSymptoms.length === 0
                  ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  )
}
