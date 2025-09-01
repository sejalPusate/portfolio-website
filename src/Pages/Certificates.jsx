// src/Pages/Certificates.jsx
import { useState } from "react";
import { X } from "lucide-react";

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Data Analytics Professional Certificate - SimpliLearn",
      image: "src/assets/da.png",
    },
    {
      id: 2,
      title: "Project Management Professional Certificate - SimpliLearn",
      image: "src/assets/pm.png",
    },
    {
      id: 3,
      title: "Python for Everybody - SimpliLearn",
      image: "src/assets/py.png",
    },
  ];

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#10002B] to-[#24004] text-gray-100 px-6 sm:px-12 py-16 relative">
      <h1 className="text-4xl font-bold text-center mb-10 text-purple-400">
        Certificates
      </h1>

      {/* Certificates Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-[#12121a]/80 border border-gray-800 rounded-2xl shadow-lg overflow-hidden 
                       hover:shadow-purple-900/40 transition duration-300 group"
          >
            <div
              className="relative w-full h-64 overflow-hidden p-4 
                         transform transition duration-500 ease-out 
                         group-hover:scale-105 group-hover:rotate-1 group-hover:-rotate-x-2"
              style={{ perspective: "1000px" }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-contain rounded-lg 
                           transform transition duration-500 ease-out 
                           group-hover:scale-110 group-hover:rotate-1"
              />
            </div>

            <div className="p-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">{cert.title}</h2>
              <button
                onClick={() => setSelectedCertificate(cert.image)}
                className="px-4 py-2 text-sm rounded-lg bg-purple-600 hover:bg-purple-500 text-white shadow"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 text-white bg-black/60 rounded-full p-2 hover:bg-black"
              onClick={() => setSelectedCertificate(null)}
            >
              <X size={24} />
            </button>
            <img
              src={selectedCertificate}
              alt="Certificate"
              className="w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
