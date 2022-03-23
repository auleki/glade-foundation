import axios from 'axios'

export const instance = axios.create({
  baseURL: "https://demo.api.glade.ng",
  headers: {
    "mid": "GP0000001",
    "key": "123456789",
    "Access-Control-Allow-Origin": "*"
  },
  timeout: 1000
})
