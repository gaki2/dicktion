type SentenceProps = {
  sentence: string;
};
export default function Heading({ sentence }: SentenceProps) {
  return <h1 className="text-center mt-5">{sentence}</h1>;
}
