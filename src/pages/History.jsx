import { useEffect, useState } from 'react'

export default function History() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('history')) || []
    setHistory(storedHistory)
  }, [])

  return (
    <div className="container mx-auto p-6 max-w-xl bg-white rounded-xl shadow-lg pt-24 text-gray-900">
      <h2 className="text-3xl font-extrabold mb-6 text-center">
        Riwayat Pemeriksaan
      </h2>

      {history.length === 0 ? (
        <p className="text-center text-gray-500 italic">Belum ada riwayat pemeriksaan.</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li
              key={index}
              className="mb-4 p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
            >
              <p>
                <strong>Tanggal:</strong>{' '}
                {new Date(item.date).toLocaleDateString()}
              </p>
              <p>
                <strong>Gejala:</strong> {item.symptoms.join(', ')}
              </p>
              <p>
                <strong>Risiko:</strong>{' '}
                <span className="font-semibold text-yellow-600">{item.risk}</span>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
