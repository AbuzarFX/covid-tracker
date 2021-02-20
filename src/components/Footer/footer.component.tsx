import React from "react";

/* Styling */
import "./footer.styles.scss";

interface Props {}

const Footer: React.FC<Props> = (props) => {
  return (
    <footer>
      <div className="u-container footer">
        <p className="footer__text">
          All data is fetched from{" "}
          <a
            href="https://github.com/disease-sh/api"
            target="_blank"
            rel="noopner noreferrer"
            className="footer__link"
          >
            disease.sh API
          </a>
        </p>
        <p className="footer__text">
          Made with ❤️ by
          <a
            href="https://github.com/AbuzarFX"
            target="_blank"
            rel="noopner noreferrer"
            className="footer__link"
          >
            {" "}
            Syed Abuzar
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
