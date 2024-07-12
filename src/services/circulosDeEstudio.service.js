// Importando librerias
import axios from "axios";
const BASE_URL = "http://51.222.84.169:8888/api/v1/inscriptionTutor/";

export const getInscriptionsTutor = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    if (response.status === 200) return response.data.data;
    else return [];
  } catch (error) {
    console.log("Error:", error.message);
    return [];
  }
};
