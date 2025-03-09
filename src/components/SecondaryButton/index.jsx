import "./SecondaryButton.css";

function SecondaryButton({ children, ...rest }) {
  return (
    <button {...rest} className="secondary-button">
      {children}
    </button>
  );
}

export default SecondaryButton;
