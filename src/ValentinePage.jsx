import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function ValentinePage() {
  const [noText, setNoText] = useState("No");
  const [yesSize, setYesSize] = useState(16);
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNoClick = () => {
    const messages = ["Why?", "R u mad at me?", "Please :(", "Baby nor", "Don't be so pokey"];
    if (clickCount < 7) {
      setNoText(messages[clickCount % messages.length]);
      setYesSize((prev) => prev * 2);
      setClickCount((prev) => prev + 1);
    } else {
      setYesSize(1000);
    }
  };

  const handleYesClick = () => {
    navigate("/yesPG"); // Navigate to yesPG page
  };

  return (
    <div
      className="flex flex-col items-center justify-center bg-pink-100 text-center px-4"
      style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Will you be my Valentine? 💖</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <button
          className="bg-red-500 text-white font-bold py-2 px-6 rounded transition-all"
          style={{
            fontSize: `${yesSize}px`,
            width: "auto",
            height: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
            overflow: "hidden",
          }}
          onClick={handleYesClick} // Call the navigate function on click
        >
          Yes
        </button>
        <button
          className="bg-gray-300 text-black font-bold py-2 px-6 rounded"
          onClick={handleNoClick}
          disabled={clickCount >= 7}
        >
          {noText}
        </button>
      </div>
    </div>
  );
}
