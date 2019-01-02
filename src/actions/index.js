export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const requestPosts = () => ({
  type: REQUEST_POSTS,
});

export const receivedPosts = json => ({
  type: RECEIVE_POSTS,
  json: json,
});

export function fetchZero (params) {
  return function (dispatch) {
    dispatch(requestPosts(params))
    return fetch('http://localhost:3005/api/countZero', {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
    .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    ).then((json) => {
      console.log(json)
        dispatch(receivedPosts(json))
    })
  }
}
