import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { postRequest } from '../../../utils';

class SignUp extends React.Component {

  apiCall() {
    postRequest('/api/v1/posts', {'test': 'test'})
      .then((response) => {

      });
  }
  render() {
    var { handleSubmit, pristine, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Username</label>
          <Field name="email" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="firstName">Password</label>
          <Field name="password" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="firstName">Password Confirmation</label>
          <Field name="password_confirmation" component="input" type="text" />
        </div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button onClick={() => this.apiCall()}> POSTS </button>
      </form>
    );
  }
};

export default reduxForm({
  form: 'signUpModal'
})(SignUp);
