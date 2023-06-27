import logo from "../../data/Validate.png";

function Logo(props) {
  return (
    <div className={"logo-main"}>
      <img src={logo} alt="logo" className={props.class} />
    </div>
  );
}

export default Logo;
