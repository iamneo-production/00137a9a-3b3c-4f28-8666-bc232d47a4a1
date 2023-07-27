import axios from "axios";


const username = 'Sanjay';
const password = 'sanjayramesh';
const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

const headers = {
  'Authorization': authHeader,
  'Content-Type': 'application/json',
};


const URI = 'http://localhost:8080'
const URI2 = 'http://localhost:8081'
const getregister = (user) => axios.post(`${URI}/register`, user,{ headers })
const getreg = (data) => axios.post(`${URI}/post`, data,{ headers })
export {getregister,getreg}