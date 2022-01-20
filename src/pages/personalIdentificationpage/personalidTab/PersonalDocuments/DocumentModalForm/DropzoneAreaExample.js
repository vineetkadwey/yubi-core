import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'

 
class DropzoneAreaExample extends Component{
  constructor(props){
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files){
    this.setState({
      files: files
    });
  }
  render(){
    return (
      <DropzoneArea
        onChange={this.handleChange.bind(this)}
        />
    )
  }
}
 
export default DropzoneAreaExample;


// import React, { useState } from 'react';
// import { AttachFile, Description, PictureAsPdf, Theaters } from '@material-ui/icons';
// import { DropzoneAreaBase } from 'material-ui-dropzone';
// function DropzoneAreaExample() {


//   const handlePreviewIcon = (fileObject, classes) => {
//     const {type} = fileObject.file
//     const iconProps = {
//       className : classes.image,
//     }
  
//     if (type.startsWith("video/")) return <Theaters {...iconProps} />
//     // if (type.startsWith("audio/")) return <AudioTrack {...iconProps} />
  
//     switch (type) {
//       case "application/msword":
//       case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
//         return <Description {...iconProps} />
//       case "application/pdf":
//         return <PictureAsPdf {...iconProps} />
//       default:
//         return <AttachFile {...iconProps} />
//     }
//   }
  
//   const [fileObjects, setFileObjects] = useState([]);
//   return (
//     <div>
//       <DropzoneAreaBase
//   fileObjects={fileObjects}
//   onAdd={newFileObjs => {
//     console.log('onAdd', newFileObjs);
//     setFileObjects([].concat(fileObjects, newFileObjs));
//   }}
//   onDelete={deleteFileObj => {
//     console.log('onDelete', deleteFileObj);
//   }}
//   getPreviewIcon={handlePreviewIcon}
// />
      
//     </div>
//   )
// }

// export default DropzoneAreaExample
