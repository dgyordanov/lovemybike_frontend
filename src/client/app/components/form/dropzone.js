import React from 'react'
import DropzoneComponent from 'react-dropzone-component';

const dropzoneInput = (field) => {
    var files = [];
    const componentConfig = {
        postUrl: 'no-url',
        iconFiletypes: ['.jpg', '.png', '.gif'],
        showFiletypeIcon: true
    };

    const djsConfig = {
        autoProcessQueue: false,
        addRemoveLinks: true,
        acceptedFiles: "image/jpeg,image/png,image/gif",
        maxFiles: 6,
        maxFilesize: 6
    };

    const eventHandlers = {
        addedfile: (file) => {
            files.push(file);
            field.input.onChange(Object.assign([], files));
            field.input.onBlur(Object.assign([], files));

        },
        removedfile: (file) => {
            let index = files.indexOf(file);
            if (index > -1) {
                files.splice(index, 1);
            }
            field.input.onChange(Object.assign([], files));
            field.input.onBlur(Object.assign([], files));
        }
    };

  return (
    <div className={`form-group ${field.required} ${field.meta.touched && field.meta.error ? 'has-error' : '' }`}>
        <label className="control-label">Images</label>
        <div>
          <DropzoneComponent config={componentConfig}
                                 eventHandlers={eventHandlers}
                                 djsConfig={djsConfig} />
        </div>
        {field.meta.touched && field.meta.error && <span className="help-block">{field.meta.error}</span>}
    </div>
  );
}

export default dropzoneInput;
