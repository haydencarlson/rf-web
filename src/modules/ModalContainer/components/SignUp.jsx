import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { postRequest } from '../../../utils';

class SignUp extends React.Component {
  render() {
    var { handleSubmit, pristine, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="password_confirmation">Password Confirmation</label>
          <Field name="password_confirmation" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="nickname">Username</label>
          <Field name="nickname" component="input" type="text" />
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
