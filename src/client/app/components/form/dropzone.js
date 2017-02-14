import React from 'react'
import DropzoneComponent from 'react-dropzone-component';

const dropzoneInput = (field) => {
    // TODO: it works only with String values
    var files = [];
    const componentConfig = {
        postUrl: 'no-url',
        iconFiletypes: ['.jpg', '.png', '.gif'],
        showFiletypeIcon: true
    };

    const djsConfig = {
        autoProcessQueue: false,
        addRemoveLinks: true,
        acceptedFiles: "image/jpeg,image/png,image/gif"
    };

    const eventHandlers = {
        addedfile: (file) => {
            // TODO: find the all files
            console.log('Added file:' + file);
            files.push(file);
            console.log(files);
            field.input.onChange(files);

        },
        removedfile: (file) => {
            console.log('Removed file:' + file);
            let index = files.indexOf(file);
            console.log('file index:' + index)
            if (index > -1) {
                files.splice(index, 1);
            }
            console.log(files);
            field.input.onChange(files);
        }
    };

  return (
    <div>
        <label htmlFor="images">Images</label>
        <div>
          <DropzoneComponent config={componentConfig}
                                 eventHandlers={eventHandlers}
                                 djsConfig={djsConfig} />

        </div>
    </div>
  );
}

export default dropzoneInput;
