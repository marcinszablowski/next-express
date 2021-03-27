import axios from "axios";

const loginUser = async (email, password) => {
  // response.data
  const {data} = await axios.post('/api/login', {email, password});
  console.log(data);
};

export default loginUser;