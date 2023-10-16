import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = "https://godaregroup.com/api";


const axiosInstance = axios.create({
  baseURL,
  timeout: 30000,
  withCredentials: false
});


// Ne pas tenter de regenrer 2 fois le token si on a toujours un 401
let tokenGeneration = false; 


// Fonction pour generer le token JWT
const generateToken = async () => 
{
  const username = 'apigodare@godaregroup.com';
  const password = 'godare_api_A7d8c5v4b5e@@7ss4d1';

  try 
  {
    // Generer le token
    const response = await axiosInstance.post('/login_check', {
      username: username,
      password: password
    });

    const token = response.data.token;

    // Sauvegarder le nouveau token dans AsyncStorage
    await AsyncStorage.setItem('jwt_token', token);

    return token;
  } 
  catch (error) 
  {
    console.error('Erreur lors de la génération du token :', error);
    throw error;
  }
};



export default axiosInstance