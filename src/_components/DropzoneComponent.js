import React from "react"
import Dropzone from 'react-dropzone';

// Dropzone for File input
export const renderDropzoneInput = (field) => {
    const files = field.input.value;
    return (
      <div id="dropzone">
        <Dropzone
          name={field.name}
          onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
        >
          <div>Drop a file here, or click to select file to upload.</div>
        </Dropzone>
        {field.meta.touched &&
          field.meta.error &&
          <span className="error">{field.meta.error}</span>}
        {files && Array.isArray(files) && (
          <ul>
            { files.map((file, i) => <li key={i}>{file.name}</li>) }
          </ul>
        )}
      </div>
    );
  }