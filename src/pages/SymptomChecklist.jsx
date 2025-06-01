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
    <div className="container mx-auto p-4 max-w-md">
      <h2 className="text-2xl font-bold mb-4">Checklist Gejala</h2>
      <ul className="mb-4">
        {symptomsList.map((symptom) => (
          <li key={symptom} className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={selectedSymptoms.includes(symptom)}
                onChange={() => toggleSymptom(symptom)}
                className="mr-2"
              />
              {symptom}
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={handleNext}
        disabled={selectedSymptoms.length === 0}
        className="bg-blue-600 text-white p-2 rounded disabled:opacity-50"
      >
        Selanjutnya
      </button>
    </div>
  )
}
