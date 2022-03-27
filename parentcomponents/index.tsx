import Head from "next/head";
import WordInput from "../components/wordInput";
import Heading from "../components/heading";
import Alert from "../components/alert";
import Loading from "../components/loading";
import SearchHistory from "../components/searchHistory";
import DataView from "../components/dataView";
import React, { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axios";
import { Axios } from "axios";

export type SearchedData = {
  name: string;
  audio: string;
  phonetic: string;
  meaning: {
    partOfSpeech: string;
    definition: string;
  };
};

type Props = {
  isMobile: boolean;
};

export default function Index({ isMobile }: Props) {
  const [inputValue, setInputValue] = useState("");
  const [searchedData, setSearchedData] = useState<SearchedData | null>(null);
  const [openAlert, setOpenAlert] = useState(false);
  const [searchLog, setSearchLog] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [isFocus, setIsFocus] = useState(isMobile ? false : true);
  useEffect(() => {
    addInterceptor(axiosInstance);
    // Get data from localStroage and SetData History
    LocalStorage();
  }, []);

  const shouldFocus = () => {
    return isMobile ? false : true;
  };

  const addInterceptor = (axiosInstance: Axios) => {
    axiosInstance.interceptors.request.use(
      function (config) {
        setLoading(true);
        setIsFocus(false);
        return config;
      },
      function (error) {
        setLoading(false);
        setIsFocus(shouldFocus());
        return Promise.reject(error);
      }
    );
    axiosInstance.interceptors.response.use(
      function (response) {
        setLoading(false);
        setIsFocus(shouldFocus());
        return response;
      },
      function (error) {
        setLoading(false);
        setIsFocus(shouldFocus());
        return Promise.reject(error);
      }
    );
  };

  const axiosRequest = async (word: string) => {
    const response = await axiosInstance
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
          alert(
            "서버에서 응답이 오지 않고 있습니다. 잠시 후 다시 시도해주세요."
          );
        } else {
          // Something happened in setting up the request that triggered an Error
          alert("서버 에러입니다.");
        }
        console.log(error.config);
      });
    return response;
  };

  const LocalStorage = () => {
    let log = [];
    const localData = localStorage.getItem("searchLog");
    if (localData) {
      log = JSON.parse(localData);
      setSearchLog(log);
    }
  };

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const fetchData = async (word = "") => {
    const target = word === "" ? inputValue : word;
    const data = await axiosRequest(target);
    if (!data) {
      return null;
    } else {
      return data[0];
    }
  };

  const setNewData = (data: any) => {
    let phonetic = data.phonetic ?? "";
    if (phonetic) {
      phonetic = "[" + phonetic.slice(1, -1) + "]";
    }
    let audio = "";
    for (let i = 0; i < data.phonetics.length; i++) {
      const temp = data.phonetics[i];
      if (temp.text && !phonetic) {
        phonetic = "[" + temp.text.slice(1, -1) + "]";
      }
      if (temp.audio && !audio) {
        audio = temp.audio;
      }
    }
    setSearchedData({
      name: data.word,
      audio,
      phonetic,
      meaning: {
        partOfSpeech: data.meanings[0].partOfSpeech ?? "",
        definition: data.meanings[0].definitions[0].definition ?? "",
      },
    });
  };

  const updateSearchLog = (newWord: string) => {
    let searchLogUpdate = searchLog.concat(newWord);
    const dupIndex = searchLog.indexOf(newWord);
    if (dupIndex !== -1) {
      searchLogUpdate.splice(dupIndex, 1);
    }
    if (!isMobile && searchLogUpdate.length > 10) {
      searchLogUpdate = searchLogUpdate.slice(1);
    } else if (isMobile && searchLogUpdate.length > 3) {
      searchLogUpdate = searchLogUpdate.slice(1);
    }
    setSearchLog(searchLogUpdate);
    localStorage.setItem("searchLog", JSON.stringify(searchLogUpdate));
  };

  const handleAlert = () => {
    setOpenAlert(true);
    setTimeout(() => {
      setOpenAlert(false);
    }, 4000);
  };

  const onSubmit = async () => {
    setInputValue("");
    const data = await fetchData();
    if (!data) {
      handleAlert();
      return;
    }
    const name = data.word;
    setNewData(data);
    updateSearchLog(name);
  };

  const onClickSearch = async (e: React.MouseEvent<HTMLSpanElement>) => {
    const word = (e.target as HTMLSpanElement).innerText;
    setInputValue("");
    const data = await fetchData(word);
    const name = data.word;
    setNewData(data);
    updateSearchLog(name);
  };

  const onDeleteClick = (name: string) => () => {
    // const updateLog = searchLog.filter((item) => item !== name);
    // setSearchLog(updateLog);
  };

  return (
    <>
      <Head>
        <title>
          DickTion | {searchedData ? searchedData.name : "발음 검색기"}
        </title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <header>
        <Heading sentence={"영어 발음 검색기"}></Heading>
      </header>
      <SearchHistory
        words={searchLog}
        onClickSearch={onClickSearch}
      ></SearchHistory>
      <WordInput
        onChange={changeInputValue}
        value={inputValue}
        onSubmit={onSubmit}
        isFocus={isFocus}
      ></WordInput>
      <DataView data={searchedData}></DataView>
      <Alert show={openAlert}></Alert>
      {loading && <Loading></Loading>}
    </>
  );
}
