import React, { useRef, useEffect } from "react";
import styles from "../styles/utils.module.css";
type PropsType = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  isFocus: boolean;
  value: string;
};

export default function WordInput({
  onChange,
  value,
  onSubmit,
  isFocus,
}: PropsType) {
  const $input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if ($input.current && isFocus) {
      $input.current.focus();
    } else if ($input.current) {
      $input.current.blur();
    }
  }, [isFocus]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className={`form-group m-auto ${styles.div_width_50}`}>
        <div className="input-group mb-3">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="단어를 입력하세요."
            id="inputLarge"
            aria-describedby="word-search"
            ref={$input}
            value={value}
            onChange={onChange}
            autoComplete="off"
          ></input>
          <button className="btn btn-info" type="submit" id="button-addon2">
            검색
          </button>
        </div>
      </div>
    </form>
  );
}
