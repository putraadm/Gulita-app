import { useEffect, useState } from 'react'

export default function History() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('history')) || []
    setHistory(storedHistory)
  }, [])

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h2 className="text-2xl font-bold mb-4">Riwayat Pemeriksaan</h2>
      {history.length === 0 ? (
        <p>Belum ada riwayat pemeriksaan.</p>
      ) : (
        <ul>
          {history.map((item, index) => (
            <li key={index} className="mb-2 border p-2 rounded">
              <p><strong>Tanggal:</strong> {new Date(item.date).toLocaleDateString()}</p>
              <p><strong>Gejala:</strong> {item.symptoms.join(', ')}</p>
              <p><strong>Risiko:</strong> {item.risk}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
