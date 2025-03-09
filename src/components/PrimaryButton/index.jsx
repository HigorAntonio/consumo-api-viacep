import "./PrimaryButton.css";

function PrimaryButton({ children, ...rest }) {
  return (
    <button {...rest} className="primary-button">
      {children}
    </button>
  );
}

export default PrimaryButton;
