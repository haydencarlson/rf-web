export function updateToken(token, response) {
  const expiredTime = JSON.parse(localStorage.getItem('tokenExpiry'));
  if (response.headers['access-token'] && response.headers.expiry > expiredTime) {
    let newToken = {
      'client': response.headers['client'],
      'uid': response.headers['uid'],
      'access-token': response.headers['access-token']
    };
    localStorage.setItem('token', JSON.stringify(newToken));
    localStorage.setItem(
      'tokenExpiry',
      JSON.stringify(response.headers.expiry)
    );
  }
  return response;
}
