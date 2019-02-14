import React, {useMemo, useEffect, useState} from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux'
import axios from 'axios';

import { userActions } from '../_actions';

import { Form, Button } from 'react-bootstrap'

import {useDropzone} from 'react-dropzone'

// Main CustomerUpload class
class CustomerUpload extends React.Component {

  constructor(props) {
    super(props)
  }
 
  componentWillMount() {
  }

  // static propTypes = {
  //   handleSubmit: PropTypes.func.isRequired,
  //   reset: PropTypes.func.isRequired,
  // };

  // POST customer ID and images archive
  // END-POINT uses cust ID.
  onSubmit(data) {

    // customer error handling
    if (data["cust_id"] === undefined) {
      alert("You need to select a customer")
      return
    } else if (data["files"] === undefined) {
      alert("Please choose a file to upload")
      return
    }

    // HARD-CODING CUSTOMER ID - later the user will be LOGGED IN
    axios.post('http://localhost:8000/data_sets/', {
      "name": data["dataset_name"],
      "description": data["description"],
      "goal": data["goal"],
      "folder_path": data["files"][0]["name"], // ONLY one file - need to generalize
      "customer": data["cust_id"],
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="col-md-12">
      <div className="formcontainer">
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Dataset name</Form.Label>
            <Form.Control type="text" placeholder="Dataset name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Goals</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Number of data points wanted for each label</Form.Label>
            <Form.Control as="input" />
          </Form.Group>
          <Form.Group>
          <div className="dropzone">
            <Dropzone />
          </div>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      </div> 
    ); 
  }
}

const baseStyle = {
  width: '100%',
  textAlign: 'center',
  height: 200,
  borderWidth: 2,
  borderColor: '#666',
  borderStyle: 'dashed',
  borderRadius: 5
}

const activeStyle = {
  borderStyle: 'solid',
  borderColor: '#6c6',
  backgroundColor: '#eee'
}

const acceptStyle = {
  borderStyle: 'solid',
  borderColor: '#00e676'
}

const rejectStyle = {
  borderStyle: 'solid',
  borderColor: '#ff1744'
}

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
}

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
}

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
}

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
}

function Dropzone(props) {
  const [files, setFiles] = useState([])
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
    }
  })

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ))

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview))
  }, [files])

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject
  ])

  return (
    <section>
      <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        <p>Drag and drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section> 
  )
}


function mapStateToProps(state) {
    const { users, authentication, customers, progressjson, labelstatsjson, overallstatsjson, dataset } = state;
    const { user } = authentication;
    return {
        user,
        users,
        progressjson,
        labelstatsjson,
        overallstatsjson,
        customers,
        dataset
    };
}

const connectedCustomerUpload = connect(mapStateToProps)(CustomerUpload);
export { connectedCustomerUpload as CustomerUpload }; 