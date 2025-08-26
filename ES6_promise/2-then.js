/* eslint-disable */
export default function handleResponseFromAPI(promise) {
  return new Promise((resolve) => {
    if (resolve === true) {
      resolve({ status: 200, body: 'success' });
    } else {
      new Error('The fake API is not working currently');
    }

    console.log('Got a response from the API');
  });
}
