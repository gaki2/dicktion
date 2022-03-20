export default function WordInput() {
  return (
    <form onSubmit={() => console.log(1)}>
      <div className="form-group mt-5 w-50 m-auto">
        <div className="input-group mb-3">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="찾을 단어를 입력하세요."
            id="inputLarge"
            aria-describedby="word-search"
          ></input>
          <button className="btn btn-info" type="submit" id="button-addon2">
            검색
          </button>
        </div>
      </div>
    </form>
  );
}
