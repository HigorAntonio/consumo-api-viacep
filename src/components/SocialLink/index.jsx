import "./SocialLink.css";

function SocialLink({ children, ...rest }) {
  return (
    <a {...rest} className="social-link">
      {children}
    </a>
  );
}

export default SocialLink;
