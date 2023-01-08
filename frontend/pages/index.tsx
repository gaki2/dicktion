import type { NextPage } from "next";
import Index from "../parentcomponents/index";

interface Props {
  isMobile: boolean;
}

const Home: NextPage<Props> = ({ isMobile }) => {
  return (
    <>
      <Index isMobile={isMobile}></Index>
    </>
  );
};

export default Home;
