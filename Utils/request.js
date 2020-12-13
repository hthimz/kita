import axios from "axios";


let defaultHeaders = {};
const header = Object.freeze({
  Accept: "application/json",
  "Content-Type": "application/json",
  // 'X-Internal-Base-Url': `${window.location.protocol}//${window.location.host}`,
});
defaultHeaders = header;

function requestFactory({ BASE_URL }) {
  return {
    setUrl(url) {
      BASE_URL = url;
    },
    get(url, params) {
      let headers = Object.assign({}, defaultHeaders, 
      );
      return wrapperOverAxios({
        headers,
        params,
        BASE_URL,
        url,
        typeOfMethod: "get",
      });
    }
  };
}


async function wrapperOverAxios({
    headers,
    params,
    BASE_URL,
    url,
    data,
    typeOfMethod,
  }) {
    const promiseResponse = axios(`${BASE_URL}${url}`, {
      method: typeOfMethod,
      headers: headers,
      data,
    })
      .then((response) => response)
      .catch((error) => error);
  
    return promiseResponse;
  }

export const API_BASE_URL = "http://ec2-3-7-0-164.ap-south-1.compute.amazonaws.com:8080/api";

const request = requestFactory({ BASE_URL: API_BASE_URL });
export default request;
