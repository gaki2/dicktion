import axios from "axios";
import { cacheAdapterEnhancer } from "axios-extensions";

export const axiosInstance = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en",
  headers: { "Cache-Control": "no-cache" },
  // disable the default cache and set the cache flag
  adapter: cacheAdapterEnhancer(axios.defaults.adapter!, {
    enabledByDefault: false,
    cacheFlag: "useCache",
  }),
  timeout: 3000,
});
