//http://localhost:8000/api/documents/?storage_path=./UMO/01-03-04/2024/1
"use client"
import axios from "axios";
// Создание экземпляра Axios с предварительно настроенным базовым URL
const instance = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP}/api/documents/?storage_path=./UMO/01-03-04/2024/1`,
  timeout: 10000, // Время ожидания ответа (в миллисекундах)
  headers: {
    'Content-Type': 'application/json', // Пример установки заголовка
    'Authorization': 'Bearer your_token_here' // Пример установки токена авторизации
  }
});

async function fetchData() {
    try {
      const response = await instance.get('data');
      // Обработка успешного ответа
      console.log('Ответ сервера:', response.data);
      return response.data;
    } catch (error) {
      // Обработка ошибки
      console.error('Произошла ошибка при выполнении запроса:', error);
      throw error;
    }
  }
  
  export default fetchData; 
 