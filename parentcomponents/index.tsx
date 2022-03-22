import Head from "next/head";
import WordInput from "../components/wordInput";
import Heading from "../components/heading";
import Alert from "../components/alert";
import SearchHistory from "../components/searchHistory";
import { axiosGetWord } from "../utils/axios";
import DataView from "../components/dataView";
import React, { useState } from "react";

export type SearchedData = {
  name: string;
  audio: string;
  phonetic: string;
  meaning: {
    partOfSpeech: string;
    definition: string;
  };
};

export default function Index() {
  const [inputValue, setInputValue] = useState("");
  const [searchedData, setSearchedData] = useState<SearchedData | null>(null);
  const [openAlert, setOpenAlert] = useState(false);
  const [searchLog, setSearchLog] = useState<string[]>([]);
  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const fetchData = async (word = "") => {
    const target = word === "" ? inputValue : word;
    const data = await axiosGetWord(target);
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
    if (searchLogUpdate.length > 10) {
      searchLogUpdate = searchLogUpdate.slice(1);
    }
    setSearchLog(searchLogUpdate);
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
        <title>DickTion</title>
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
      ></WordInput>
      <DataView data={searchedData}></DataView>
      <Alert show={openAlert}></Alert>
    </>
  );
}