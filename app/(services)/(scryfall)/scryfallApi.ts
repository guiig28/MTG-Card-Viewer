import axios from "axios";

const scryfallApi = axios.create({ baseURL: "https://api.scryfall.com" });

export default scryfallApi;
