import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface IProps {
  setFiles: (files: object[]) => void;
}

const dropzoneStyles = {
  border: 'dashed 3px',
  borderColor: '#eee',
  borderRadius: '5px',
  paddingTop: '30px',
  textAlign: 'center' as 'center',
  height: '200px'
};

const dropzoneActive = {
  borderColor: 'green'
};

const PhotoWidgetDropzone: React.FC<IProps> = ({ setFiles }) => {
  const onDrop = useCallback(acceptedFiles => {
    setFiles(
      acceptedFiles.map((file: object) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    );
  }, [setFiles]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={
        isDragActive ? { ...dropzoneStyles, ...dropzoneActive } : dropzoneStyles
      }
    >
      <input {...getInputProps()} />
      <button name='upload' className="btn btn-block btn-lg">
          <i className="fas fa-upload text-secondary" style={{fontSize:50}}></i>
      </button>
      <h3>Drop image here</h3>
    </div>
  );
};

export default PhotoWidgetDropzone;