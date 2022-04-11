import axios from 'axios';

//Local connection
/* export default axios.create({baseURL:'http://localhost:4000/api'}) */

export default axios.create({baseURL:'https://spotisearch.herokuapp.com/api'})