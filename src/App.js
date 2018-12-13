import React, { Component, PropTypes, } from 'react';
import { reduxForm, Field } from 'redux-form';

import Dropzone from 'react-dropzone';
import axios from 'axios';

const FILE_FIELD_NAME = 'files';

const renderDropzoneInput = (field) => {
  const files = field.input.value;
  return (
    <div>
      <Dropzone
        name={field.name}
        onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
      >
        <div>Drop a files here, or click to select file to upload.</div>
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

class App extends Component {

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  // POST customer ID and images archive
  // END-POINT uses name instead of ID.
  onSubmit(data) {
    var body = new FormData();
    Object.keys(data).forEach(( key ) => {
      body.append(key, data[ key ]);
    });

    console.info('POST', body, data);
    console.info('This is expected to fail:');
    axios.post('/', {
      body: body
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }

  // Switching GET to AXIOS
  getStatistics() {
    axios.get('/')
      .then(response => {
        console.log(response);
      })
  }

  render() {
    const {
      handleSubmit,
      reset,
    } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div>
          <h1>LabelQuest Customer Interface</h1>
          <label>Customer ID</label>
          <div>
            <Field
              name="CustomerID"
              component="input"
              type="text"
              placeholder="Customer ID"
            />
          </div>
        </div>
          <div>
            <p></p>
            <label htmlFor={FILE_FIELD_NAME}>Upload Image Archive</label>
            <Field
              name={FILE_FIELD_NAME}
              component={renderDropzoneInput}
            />
          </div>
          <div>
            <button type="submit">
              Submit
            </button>
            <button onClick={reset}>
              Clear Values
            </button>
          </div>

        </form>
        <p></p>
        <button onClick={this.getStatistics}>
        Get Label getStatistics
        </button>
      </div>
    );
  }
}

export default reduxForm({
  form: 'simple',
})(App);
