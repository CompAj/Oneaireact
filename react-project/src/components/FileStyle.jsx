import { useRef } from 'react';

function FileStyle() {
  const fileInputRef = useRef(null);
  const handleClick = () => {

    fileInputRef.current.click();
  };

  const handleFileChange =  (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      let content; 
      reader.onload = async (event) => {
       
        const contents = event.target.result;
        content = contents;

        let response = await fetch("http://locahost:3000/api/generate", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }, 
          body: JSON.stringify({prompt: content})
        })

        console.log(response);

      };



      reader.readAsText(file); 
    }
  };

  return (
    <div className="file-style-container">
      <div className="file-holder">
        <p>Text Analyzer</p>
      </div>
      <div className="btn-temp">
        <button className="btn" onClick={handleClick}>Select File</button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
          accept=".txt" 
        />
      </div>
    </div>
  );
}

export default FileStyle;
