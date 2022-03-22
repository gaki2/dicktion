import styles from "../styles/utils.module.css";
type Props = {
  show: boolean;
};

export default function Alert({ show }: Props) {
  return (
    <div
      className={`alert alert-dismissible alert-danger ${styles.alert} ${
        show || styles.hidden
      }`}
    >
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
      ></button>
      <strong>존재하지 않는 단어입니다.</strong> 단어를 다시 확인해주세요.
    </div>
  );
}
