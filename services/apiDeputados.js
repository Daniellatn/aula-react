import axios from "axios";


const apiDepultados = axios.create({
  baseURL: 'https://dadosabertos.camara.leg.br/api/v2'
})

export default apiDepultados