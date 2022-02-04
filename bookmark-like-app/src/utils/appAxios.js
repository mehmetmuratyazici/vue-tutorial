import axios from "axios";

export const appAxios = axios.create({
  baseURL : 'http://localhost:8088',
  headers : {
      token : "Authorization sadmfgske23mfkadf0maf234t6gmr2dFfsadf34",
      "content-type" : "application/json",
      withCredentials : false,

  }  
})