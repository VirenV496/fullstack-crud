  
import axios from 'axios';

const url = 'http://localhost:3000/api/users/user';

export const fetchUsers = () => axios.get(url);