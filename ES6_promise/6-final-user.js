import uploadPhoto from './5-photo-reject.js';
import signUpUser from './4-user-promise.js';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((responses) => responses.map((response) => ({
    status: response.status,
    value: response.status === 'fulfilled' ? response.value : response.reason,
  })));
}