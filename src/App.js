import React, { Component, PropTypes, } from 'react';
import { reduxForm, Field } from 'redux-form';

import Dropzone from 'react-dropzone';
import axios from 'axios';

const FILE_FIELD_NAME = 'files';
const required = value => value ? undefined : 'Required'


// Render of form
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

// Dropzone for File input
const renderDropzoneInput = (field) => {
  const files = field.input.value;
  return (
    <div>
      <Dropzone
        name={field.name}
        onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
      >
        <div>Drop a file here, or click to select file to upload.</div>
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

// Validation for form entries
const validate = values => {
  const errors = {}
  if (!values.dataset_name) {
    errors.dataset_name = 'Required'
  } 
  if (!values.description) {
    errors.description = 'Required'
  }
  if (!values.goal) {
    errors.goal = 'Required'
  }
  return errors
}

// Main App class
class App extends Component {

  constructor() {
    super();

    // set initial state container for customers
    this.state = {
      customers: []
    };
  }

  // Get current list of customers
  componentDidMount() {
    axios.get('http://localhost:8000/customers/')
      .then(response => {
        //var clients = response.data.map(cust => (cust["id"],cust["name"]))
        //console.log(response.data);
        this.setState({customers: response.data})
      })
      .catch(error => console.log(error.response));
  }

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

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
    const {
      handleSubmit,
      reset,
    } = this.props;

    // Read state in order to propogate select field
    var custs = this.state.customers;

    return (
      <div>
        <img src={require("./labelQuestCustomerPortal.png")} alt="Portal Header" />
        <h3>LabelQuest Customer Interface</h3>

        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <div>
          
          <label>Customer Name</label>
          <div>
          <Field
              name="cust_id"
              component="select">
              <option value="">Select a customer...</option>
              {custs.map(cust => (
              // Customer name is mapped to the ID for posting
              <option value={cust["id"]} key={cust["id"]}>
                {cust["name"]}
              </option>
            ))}
          </Field>
          
          </div>
          <p />
          <hr />

          <p />
          <div>
            <Field
              name="dataset_name"
              component={renderField}
              type="text"
              label="Dataset Name"
            />
          </div>

          <p />
          <div>
            <Field
              name="description"
              component={renderField}
              type="text"
              label="Dataset description"
            />
          </div>

          <p />
          <div>
            <Field
              name="goal"
              component={renderField}
              type="number"
              label="Goal"
            />
          </div>
        </div>

          <div>
            <p />
            <label htmlFor={FILE_FIELD_NAME}>Upload Label Image Archive</label>
            <Field
              name={FILE_FIELD_NAME}
              component={renderDropzoneInput}
            />
          </div>
          <div>
            <button type="submit">
              Upload
            </button>
            <button onClick={reset}>
              Clear Values
            </button>
          </div>

        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'simple',
  validate,
})(App);
