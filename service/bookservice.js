import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "http://127.0.0.1:8080"

export async function getRequest(URL){
    const response = await axiosClient.get(URL)
    .then(response => response)
    .catch(err => console.log(err))

    return response.data
}

export async function postRequest(URL, payload){
    const response = await axiosClient.post(URL, payload)
    .then(response => response)
    .catch(err => console.log(err))

    return response
}

export async function putRequest(URL, payload){
    const response = await axiosClient.put(URL, payload)
    .then(response => response)
    .catch(err => console.log(err))

    return response
}

export async function deleteRequest(URL){
     await axiosClient.delete(URL)
    .then(response => response)
    .catch(err => console.log(err))

}
