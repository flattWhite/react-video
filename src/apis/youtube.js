import axios from "axios";

const KEY = "AIzaSyD7oiIu1n96eBLXu2e6SI_yTO_PoTxgdKE";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: { part: "snippet", maxResult: 5, key: KEY }
});
