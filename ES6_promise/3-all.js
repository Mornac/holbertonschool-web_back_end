/* eslint-disable */
import { utils } from "jest-snapshot";
import uploadPhoto from utils.js
import createUser from utils.js

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photo, user] = results;
    })
    .catch(() => {
      console.log("Signup system offline");
    })
    .finally(() => {
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
}
