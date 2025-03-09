import "./PageIndicator.css";

function PageIndicator({ path, current }) {
  return (
    <p className="page-indicator">
      {path}
      <span className="page-indicator-current">{current}</span>
    </p>
  );
}

export default PageIndicator;
