import ProgressBar from "react-bootstrap/ProgressBar";
type Progress = {
  now: number;
};
export default function Progress({ now }: Progress) {
  return (
    <ProgressBar
      className="d-none"
      variant="info"
      now={now}
      label={`${now}%`}
      visuallyHidden
      animated
    ></ProgressBar>
  );
}
