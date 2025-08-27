/* eslint-disable */
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstname, lastname, filename) {
  return Promise.allSettled([
    signUpUser(firstname, lastname),
    uploadPhoto(filename),
  ])
  .then((results) => {
    return results.map((result) => {
      if (result.status === 'fulfilled') {
        return {
          status: result.status,
          value: result.value
        };
      } else {
        return {
          status: result.status,
          value: result.reason
        };
      }
    });
  });
}
