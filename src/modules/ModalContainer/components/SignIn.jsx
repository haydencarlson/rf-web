import React from 'react';
import { reduxForm, Field } from 'redux-form';
class SignIn extends React.Component {

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
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </form>
    );
  }
};

export default reduxForm({
  form: 'signInModal'
})(SignIn);
