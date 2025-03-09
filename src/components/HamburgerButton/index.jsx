import "./HamburgerButton.css";

function HamburgerButton({ isActive, ...rest }) {
  return (
    <button
      {...rest}
      className={isActive ? "hamburger-button active" : "hamburger-button"}
    ></button>
  );
}

export default HamburgerButton;
