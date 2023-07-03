import logo from "../../data/validate_logo_nav.png";

function Logo(props) {
  return (
    <div className={"logo-main"}>
      <img src={logo} alt="logo" className={props.class} />
    </div>
  );
}

export default Logo;
