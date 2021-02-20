import React from "react";

/* Styling */
import "./homepage.styles.scss";

/* Components */
import Herobox from "../../components/Herobox/herobox.component";

interface Props {}

const HomePage: React.FC<Props> = () => {
  return (
    <>
      <Herobox />
    </>
  );
};

export default HomePage;
