import styles from "../styles/utils.module.css";

type Words = {
  words: string[];
  onClickSearch: (e: React.MouseEvent<HTMLSpanElement>) => Promise<void>;
};

export default function SearchHistory({ words, onClickSearch }: Words) {
  const wordBadges = [];
  for (let i = 0; i < words.length; i++) {
    wordBadges.push(
      <h4 className="d-inline" key={words[i]}>
        <span
          onClick={onClickSearch}
          className="badge rounded-pill bg-primary m-1 align-content-center"
          role="button"
        >
          {words[i]}
        </span>
      </h4>
    );
  }
  return (
    <div
      className={`mt-5 ${styles.div_width_50} m-auto flex-row pt-3 ${styles.min_height_span}`}
    >
      {wordBadges}
    </div>
  );
}
