// src/components/FileUpload.jsx
import React, { useState, useRef } from 'react';
import '../styles/FileUpload.css';

const FileUpload = ({ onFileSelect, accept = ".pdf,.doc,.docx" }) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className={`file-upload-container ${dragActive ? 'drag-active' : ''}`}>
      <div
        className="file-upload-form"
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputRef}
          type="file"
          className="file-input-hidden"
          multiple={false}
          onChange={handleChange}
          accept={accept}
        />
        
        <label
          className={`file-upload-label ${dragActive ? 'drag-active' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="file-upload-content">
            {selectedFile ? (
              <div className="file-selected">
                <div className="file-icon">📄</div>
                <div className="file-info">
                  <span className="file-name">{selectedFile.name}</span>
                  <span className="file-size">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </span>
                </div>
                <button
                  type="button"
                  className="file-remove"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFile(null);
                    onFileSelect(null);
                    inputRef.current.value = '';
                  }}
                >
                  ×
                </button>
              </div>
            ) : (
              <div className="file-upload-prompt">
                <div className="upload-icon">📁</div>
                <div className="upload-text">
                  <span className="primary-text">Click to upload</span>
                  <span className="secondary-text">or drag and drop</span>
                </div>
                <div className="file-types">PDF, DOC, DOCX (max 10MB)</div>
              </div>
            )}
          </div>
          <button
            type="button"
            className="file-upload-button"
            onClick={onButtonClick}
          >
            Choose File
          </button>
        </label>
      </div>
    </div>
  );
};

export default FileUpload;
