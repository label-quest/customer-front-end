import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux'
import axios from 'axios';

import { userActions } from '../_actions';

import { Form, Row, Col, Button } from 'react-bootstrap'

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
            <Form.Label>Number of labels</Form.Label>
            <Form.Control as="input" />
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