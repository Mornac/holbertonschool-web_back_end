/* eslint-disable */
export default function loadBalancer(chinaDownload, USDowloud) {
  return Promise.race([chinaDownload, USDowloud]);
}
