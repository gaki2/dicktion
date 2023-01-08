import styles from "../styles/utils.module.css";
import { memo } from "react";

type Words = {
  words: string[];
  onClickSearch: (e: React.MouseEvent<HTMLSpanElement>) => Promise<void>;
};

function SearchHistory({ words, onClickSearch }: Words) {
  const wordBadges = [];
  for (let i = 0; i < words.length; i++) {
    wordBadges.push(
      <h4 className="d-inline" key={words[i]}>
        <button
          onClick={onClickSearch}
          className="btn badge rounded-pill bg-light m-1 align-content-center"
          role="button"
        >
          {words[i]}
        </button>
      </h4>
    );
  }
  return (
    <div
      className={`mt-2 ${styles.div_width_50} m-auto flex-row pt-3 ${styles.min_height_span}`}
    >
      {wordBadges}
    </div>
  );
}

export default memo(SearchHistory);
