import { postRequest } from '../../utils';

export const handleLoginSubmit = (values, dispatch) => {

  postRequest('/api/v1/auth/sign_in', values)
    .then((res) => {
      console.log(res);
    });
}

export const handleSignUpSubmit = (values, dispatch) => {
  console.log(values);
  postRequest('/api/v1/auth/', values)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err.data)
    })
}
