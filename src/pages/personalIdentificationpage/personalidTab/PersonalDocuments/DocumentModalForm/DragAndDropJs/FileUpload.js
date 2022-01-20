

import { Link } from '@material-ui/core';
import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px',
  borderWidth: 1,
  borderRadius: 1,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

export default function FileUpload (props) {
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    open
  } = useDropzone({ accept: 'image/jpeg, image/png'
});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {borderColor:"black", color:"black"}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);


  const files = acceptedFiles.map(file => (
      <li key={file.path}>
     {file.path} - {file.size} bytes
    </li>
    
    ));
console.log("fiels",files);

  

  return (
    <div className="container">
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p>drag and drop your document or</p>
 <Link type="button" onClick={open}>
 browse  
        </Link>
<p>(only pdf or images allowed)</p>
      </div>
      <aside> 
        <h4>Files</h4>
         {console.log(files)}
        <ul>
           
        {files}</ul>
     </aside>
    </div>
  );
}

// simple drag and drop




// import React from 'react';
// import {useDropzone} from 'react-dropzone';

// export default function FileUpload (props) {
//   const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
//   const files = acceptedFiles.map(file => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>


//   ));



//   return (
//     <section className="container">
//       <div {...getRootProps({className: 'dropzone'})}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//       <aside>
//         <h4>Files</h4>
//         {console.log(files)}
//         <ul>{files}</ul>
//       </aside>
//     </section>
//   );
// }
