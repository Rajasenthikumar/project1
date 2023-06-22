import axios from 'axios';
const PLATFORM_BASE_URL = 'http://192.168.100.195:3000';

export  default function main(payload) {
  const URL = `${PLATFORM_BASE_URL}/api/v1/user/signup`;
  return axios.post(
    URL,
    payload,
  );
}