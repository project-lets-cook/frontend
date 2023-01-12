import axios from "axios";

export const api = axios.create({
  baseURL: "https://doacao.onrender.com/",
  timeout: 7000,
});

// export const api = axios.create({
//   baseURL: "http://localhost:3001//",
//   timeout: 7000,
// });