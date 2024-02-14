import { useRef } from 'react';

function FileStyle() {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('File selected:', file.name);
    }
  };

  return (
    <div className="file-syle-container">
      <div className="file-holder">
        <p>Text Analyzer</p>
      </div>
      <div className="btn-temp">
        <button className="btn" onClick={handleClick}>Select File</button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{display: 'none'}}
        />
      </div>
    </div>
  );
}

export default FileStyle;
