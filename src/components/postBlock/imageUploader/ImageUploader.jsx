import { useRef } from "react";
import "./ImageUploader.scss";

function ImageUploader({ selectedFile, setSelectedFile }) {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  function validateImage(file) {
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      alert(
        "Выбранный файл слишком большой, пожалуйста, выберите файл размером не более 5 МБ."
      );
      return false;
    }
    return true;
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    validateImage(file);
    console.log("Выбран файл:", file);
  };

  return (
    <div className="upload-photo-form">
      <button onClick={handleButtonClick} className="upload-button">
        Upload
      </button>
      <h2 className="upload-text">
        {selectedFile
          ? selectedFile.name.slice(0, 30) + "..."
          : "Upload your photo"}
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
