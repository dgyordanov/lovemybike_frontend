import React from 'react'
import Dropzone from 'react-dropzone';

const dropzoneInput = (field) => {
  const files = field.input.value;
  return (
    <div>
        <label htmlFor="images">Images</label>
        <div>
          <Dropzone name={field.name}
            onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)} >
            <div>Try dropping some files here, or click to select files to upload.</div>
            {files && Array.isArray(files) && (
                <div>
                    { files.map((file, i) => <img width="80" src={file.preview} />) }
                </div>
            )}
          </Dropzone>
          {field.meta.touched &&
            field.meta.error &&
            <span className="error">{field.meta.error}</span>}

        </div>
    </div>
  );
}

export default dropzoneInput;
