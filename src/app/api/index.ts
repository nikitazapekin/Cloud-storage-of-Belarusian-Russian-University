
 import axios from "axios";
const axiosInstance = axios.create({
 baseURL: `http://localhost:${process.env.NEXT_PUBLIC_PORT}/api/`,
  headers: {
    common: {
      Authorization: `${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    }
  }
});
const fetchFiles = async () => {
  try {
    const response = await axiosInstance.get('documents/');
    return response.data;
  } catch (error) {
    console.error('Error fetching files:', error);
    throw error;
  }
};
export default fetchFiles
