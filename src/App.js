import React, { Component, PropTypes, } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux'
import CustomerDatasetView from './CustomerDatasetView'
import axios from 'axios';

import { getCustomers, getCustomerDatasets } from './CustomersActions'
import renderDropzoneInput from "./DropzoneComponent"
import renderField from "./RenderFieldComponent"

const FILE_FIELD_NAME = 'files';

// Simple Validation of form entries
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

  constructor(props) {
    super(props)
    this.handleGetDatasets = this.handleGetDatasets.bind(this);
  }

  handleGetDatasets() { 
    console.log("Handler ")
    this.props.getCustomerDatasets("3")
  }
 
  componentWillMount() {
    this.props.getCustomers()
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
    var custs = this.props.customers;
    var dataset = this.props.dataset;
    console.log(custs)

    return (
      <div>
        <div className="container">
          <img src={require("./labelQuestCustomerPortal.png")} alt="Portal Header" />
          <form id="contact" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h3>LabelQuest Upload Form</h3>
            <div>
            
            <label>Customer Name (testing - will be replaced by LOGIN) </label>
            <div>
              <Field
                  name="cust_id"
                  component="select">
                  <option value="">Select a customer...</option>
                  {custs !== undefined ? custs.map(cust => (
                  // Customer name is mapped to the ID for posting
                  <option value={cust["id"]} key={cust["id"]}>
                    {cust["name"]}
                  </option>
                )):console.log("error customers undefined")}
              </Field>
            </div>

            <div>
              <Field
                name="dataset_name"
                component={renderField}
                type="text"
                label="Dataset Name"
              />
            </div>

            <div>
              <Field
                name="description"
                component={renderField}
                type="text"
                label="Dataset description"
              />
            </div>

            <div>
              <Field
                name="goal"
                component={renderField}
                type="number"
                label="Goal"
              />
            </div>
          </div>

            <div id="upload-area">
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
        
        <div>
          <p>-----</p>
          <button onClick={this.handleGetDatasets}>
          See Customer Datasets
          </button>
        </div>
        <div>
          <CustomerDatasetView
          dataset = {dataset} />
          
        </div>
      </div> 
    ); 
  }
}

const mapStateToProps = state => ({
  customers: state.customers.customers,
  dataset: state.customers.dataset,
});

const mapDispatchToProps = dispatch => ({
  getCustomers: getCustomers(dispatch),
  getCustomerDatasets: getCustomerDatasets(dispatch),
})

App = reduxForm({
  form: 'simple',
  validate,
})(App);

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
