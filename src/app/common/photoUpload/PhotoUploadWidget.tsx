import React, { Fragment, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import PhotoWidgetDropzone from "./PhotoWidgetDropzone";
import PhotoWidgetCropper from "./PhotoWidgetCropper";

interface IProps {
  loading: boolean;
  uploadPhoto: (file: Blob) => void;
}

const PhotoUploadWidget: React.FC<IProps> = ({ loading, uploadPhoto }) => {
  const [files, setFiles] = useState<any[]>([]);
  const [image, setImage] = useState<Blob | null>(null);

  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  });

  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card ">
          <div className="card-header bg-light">Step 1 - Add Photo</div>
          <div className="card-body">
            <PhotoWidgetDropzone setFiles={setFiles} />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-header bg-light">Step 2 - Resize image</div>
          <div className="card-body">
            {files.length > 0 && (
              <PhotoWidgetCropper
                setImage={setImage}
                imagePreview={files[0].preview}
              />
            )}
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-header bg-light">Step 3 - Preview & Upload</div>
          <div className="card-body">
            {files.length > 0 && (
              <Fragment>
                <div
                  className="img-preview"
                  style={{ minHeight: "200px", overflow: "hidden" }}
                />
                <div className="row row no-gutters">
                  <div className="col-md-6">
                    <button
                      className="btn btn-success btn-block"
                      onClick={() => uploadPhoto(image!)}
                    >
                      <i className="fas fa-check"></i>
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button
                      className="btn btn-outline-danger btn-block"
                      onClick={() => setFiles([])}
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(PhotoUploadWidget);
