import Head from "next/head";
import WordInput from "../components/wordInput";
import Heading from "../components/heading";
import Alert from "../components/alert";
import Loading from "../components/loading";
import SearchHistory from "../components/searchHistory";
import DataView from "../components/dataView";
import React, { useState, useEffect, useCallback } from "react";
import { axiosInstance } from "../utils/axios";
import { isAlpha } from "../utils/utils";
import { Axios } from "axios";

export type SearchedData = {
  name: string;
  audio: string | null;
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
    // get interceptor for axios Loading UI.
    addInterceptor(axiosInstance);
    // Get data from localStroage and SetData History
    LocalStorage();
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    // cleanup this component
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });

  const handleKeydown = (e: KeyboardEvent) => {
    if (isAlpha(e.key)) {
      setIsFocus(true);
    }
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
        setIsFocus(false);
        return Promise.reject(error);
      }
    );
    axiosInstance.interceptors.response.use(
      function (response) {
        setLoading(false);
        setIsFocus(false);
        return response;
      },
      function (error) {
        setLoading(false);
        setIsFocus(false);
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
          console.log("????????? ???????????? ??????????????????.");
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          alert(
            "???????????? ????????? ?????? ?????? ????????????. ?????? ??? ?????? ??????????????????."
          );
        } else {
          // Something happened in setting up the request that triggered an Error
          alert("?????? ???????????????.");
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
      audio: audio === "" ? null : audio,
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

  const onClickSearch = useCallback(
    async (e: React.MouseEvent<HTMLSpanElement>) => {
      const word = (e.target as HTMLSpanElement).innerText;
      setInputValue("");
      const data = await fetchData(word);
      const name = data.word;
      setNewData(data);
      updateSearchLog(name);
    },
    [searchLog]
  );

  const onDeleteClick = (name: string) => () => {
    // const updateLog = searchLog.filter((item) => item !== name);
    // setSearchLog(updateLog);
  };

  return (
    <>
      <Head>
        <title>
          DickTion | {searchedData ? searchedData.name : "?????? ?????????"}
        </title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <header>
        <Heading sentence={"?????? ?????? ?????????"}></Heading>
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
