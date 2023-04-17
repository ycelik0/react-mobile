import axios from "axios";
// Change BaseURL from localhost to manage.orthofoodie.com
export default axios.create({
  baseURL: "https://manage.orthofoodie.com/orthofoodie/",
  headers: { "Content-Type": "application/json" },
});
