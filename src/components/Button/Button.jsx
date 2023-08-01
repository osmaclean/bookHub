import PropTypes from "prop-types";
import "./index.scss";

export default function Button({ text, isSelected, selectFunction }) {
  return (
    <div
      onClick={() => {
        selectFunction();
      }}
      className={`button ${isSelected ? "primary" : "secundary"}`}
    >
      {text}
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  isSelected: PropTypes.bool,
  selectFunction: PropTypes.func,
};
