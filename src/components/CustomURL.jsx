import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1",
  headers: {
    Accept: "application/json",
  },
});

export default customFetch;
