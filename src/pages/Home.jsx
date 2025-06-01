export default function Home() {
  return (
    <div className="container mx-auto p-6 max-w-3xl text-center bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 rounded-xl shadow-lg text-white">
      <h1 className="text-4xl font-extrabold mb-6 drop-shadow-lg">
        Selamat datang di GULITA
      </h1>
      <p className="mb-6 text-lg">
        GULITA adalah aplikasi untuk deteksi dini risiko diabetes berdasarkan gejala yang Anda rasakan.
      </p>
      <p className="mb-8 text-lg">
        Silakan mulai dengan mengisi checklist gejala pada menu{" "}
        <a
          href="/symptoms"
          className="font-semibold underline hover:text-yellow-300 transition-colors duration-300"
        >
          Symptom Checklist
        </a>
        .
      </p>
      <a
        href="/symptoms"
        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
      >
        Mulai Checklist
      </a>
    </div>
  )
}