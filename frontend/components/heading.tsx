import { memo } from "react";

type SentenceProps = {
  sentence: string;
};
function Heading({ sentence }: SentenceProps) {
  return <h1 className="text-center mt-4">{sentence}</h1>;
}

export default memo(Heading);
