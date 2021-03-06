import { SearchedData } from "../parentcomponents/index";
import styles from "../styles/utils.module.css";
import { memo, useRef, useState } from "react";

function DataView({ data }: { data: SearchedData | null }) {
  const $audio = useRef<HTMLAudioElement>(null);
  const [disable, setDisalbe] = useState(false);
  const play = () => {
    if ($audio.current) {
      try {
        $audio.current.play();
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className={`m-auto mt-5 ${styles.div_width_50}`}>
      <h1 className="mb-3 mt-5">{data && "검색결과"}</h1>
      <hr></hr>
      <h2 className="m-1 mt-4 text-success">{data && "발음"}</h2>
      <div className="d-flex align-items-center">
        <h3 className="d-inline m-1">
          {data && data.name}
          {"          "}
        </h3>
        <h3 className="d-inline m-2">{data && data.phonetic}</h3>
        <audio src={`${data && data.audio}`} ref={$audio}></audio>
        {data && (
          <button
            className={styles.play}
            onClick={play}
            disabled={data.audio === null ? true : false}
          >
            듣기
          </button>
        )}
      </div>
      <h2 className="m-1 mt-5 text-success">{data && "정의"}</h2>
      <div className="d-flex align-items-center">
        <h3 className="d-inline m-1">{data && data.meaning.partOfSpeech}</h3>
        <h4 className="d-inline m-4">{data && data.meaning.definition}</h4>
      </div>
      <h3 className="mt-5">
        <a
          href={`https://dictionary.cambridge.org/ko/%EC%82%AC%EC%A0%84/%EC%98%81%EC%96%B4/${data?.name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data && "자세히 보러가기"}
        </a>
      </h3>
    </div>
  );
}

export default memo(DataView);
