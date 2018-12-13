import React, { Component, PropTypes, } from 'react';
import { reduxForm, Field } from 'redux-form';

import Dropzone from 'react-dropzone';

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
  onSubmit(data) {
    var body = new FormData();
    Object.keys(data).forEach(( key ) => {
      body.append(key, data[ key ]);
    });

    console.info('POST', body, data);
    console.info('This is expected to fail:');
    fetch(`http://labelquest.com/send/`, {
      method: 'POST',
      body: body,
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
  }

  // GET statistics to show to Customer
  // Maybe get an array of hits per label
  // getStatistics() {
  //   fetch('http://labelquest.com/get/')
  //     .then(stats => stats.map(key, index){
  //       //put unwrap here
  //       //display bar-graph per label
  //     }).catch(err => console.error(err));
  // }

  render() {
    const {
      handleSubmit,
      reset,
    } = this.props;
    return (
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
        <p></p>
        <button onClick={this.getStatistics}>
        Get Label getStatistics
        </button>

      </form>

      
    );
  }
}

export default reduxForm({
  form: 'simple',
})(App);
