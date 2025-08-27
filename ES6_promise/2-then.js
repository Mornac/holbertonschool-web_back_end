/* eslint-disable */
export default function handleResponseFromAPI() {
  return Promise(resolve)
    .then(() => {
      resolve({ status: 200, body: 'success' });
    })
    .catch(() => {
      resolve('The fake API is not working currently');
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}
