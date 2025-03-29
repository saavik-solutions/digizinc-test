import { useState } from "react";
import { ArrowDownRight } from "lucide-react";

export default function CaseGrid() {
  const images = [
    { src: "/case_1.png", title: "Case 1", description: "Description for Case 1" },
    { src: "/case_2.jpg", title: "Case 2", description: "Description for Case 2" },
    { src: "/case_3.jpg", title: "Case 3", description: "Description for Case 3" },
    { src: "/case_4.jpg", title: "Case 4", description: "Description for Case 4" },
    { src: "/case_5.jpg", title: "Case 5", description: "Description for Case 5" },
    { src: "/case_6.jpg", title: "Case 6", description: "Description for Case 6" },
  ];

  const [activeCase, setActiveCase] = useState<number | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto mt-8">
      {activeCase === null ? (
        // Grid view when no case is selected
        <div className="grid grid-cols-3 gap-6 p-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`ml-5 relative w-[320px] h-[420px] rounded-lg overflow-hidden ${
                index > 2 ? "pointer-events-none opacity-50" : ""
              }`}
              onClick={() => {
                if (index < 3) setActiveCase(index);
              }}
            >
              <img
                src={image.src}
                alt={`Case ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 right-2 bg-black/50 p-2 rounded-full">
                <ArrowDownRight className="text-white" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Full-page expanded view when a case is selected
        <div className="p-6 flex flex-col items-center bg-gray-900 text-white min-h-screen">
          <img
            src={images[activeCase].src}
            alt={`Case ${activeCase + 1}`}
            className="w-full h-96 object-cover rounded-lg"
          />
          <h2 className="text-3xl font-bold mt-4">{images[activeCase].title}</h2>
          <p className="text-lg mt-2">{images[activeCase].description}</p>
          <button
            className="mt-6 bg-purple-600 px-4 py-2 rounded text-white"
            onClick={() => setActiveCase(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}