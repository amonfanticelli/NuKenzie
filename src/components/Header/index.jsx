import "./style.css";
const Header = () => {
  return (
    <header className="header">
      <div className="containerH1">
        <h1 className="headerTitle">
          {" "}
          <span className="pinkText">Nu</span> Kenzie
        </h1>
      </div>

      <button className="buttonHeader">Início</button>
    </header>
  );
};

export default Header;
