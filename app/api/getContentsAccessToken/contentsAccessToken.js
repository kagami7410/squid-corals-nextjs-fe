// /pages/api/token.js
import axios from 'axios';
import { setToken } from '../../lib/token';

let storedToken = null;

export default async function handler(req, res) {
  if (!storedToken) {
    try {
             // Read the JSON file
      const filePath = path.join(process.cwd(), 'credentials.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const credentials = JSON.parse(fileContents);

      const response = await axios.post('http://localhost:8000/login', {
        username: credentials.username,
        password: credentials.password,
      });
      storedToken = response.data.token; // Store the token
      console.log("token recieved: ", storedToken)
      setToken(storedToken)
    } catch (error) {
      console.error('Error fetching token:', error);
      return res.status(500).json({ message: 'Error fetching token' });
    }
  }

  return res.status(200).json({ token: storedToken });
}