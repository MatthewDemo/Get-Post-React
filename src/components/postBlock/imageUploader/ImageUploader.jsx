import { useState, useRef } from "react";
import "./ImageUploader.scss";

function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log("Выбран файл:", file);
  };

  return (
    <div className="upload-photo-form">
      <button onClick={handleButtonClick} className="upload-button">
        Upload
      </button>
      <h2 className="upload-text">
        {selectedFile ? selectedFile.name.slice(0, 30) + '...' : "Upload your photo"}
      </h2>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default ImageUploader;
