import axios from "axios";
import { cacheAdapterEnhancer } from "axios-extensions";

const http = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en",
  headers: { "Cache-Control": "no-cache" },
  // disable the default cache and set the cache flag
  adapter: cacheAdapterEnhancer(axios.defaults.adapter!, {
    enabledByDefault: false,
    cacheFlag: "useCache",
  }),
});

export async function axiosGetWord(word: string) {
  const response = http
    .get(`/${word}`)
    .then((res) => res.data)
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("단어의 스펠링을 확인해주세요.");
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        alert("서버에서 응답이 오지 않고 있습니다. 죄송합니다.");
      } else {
        // Something happened in setting up the request that triggered an Error
        alert("서버 에러입니다.");
      }
      console.log(error.config);
    });
  return response;
}
