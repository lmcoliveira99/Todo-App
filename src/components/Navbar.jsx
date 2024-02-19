import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <div className="navbar bg-gradient-to-r from-blue-300 to-light-blue-400 h-20 flex justify-center items-center">
      <h1>
        <img className="logo h-20" src={logo} alt="Logo" />
      </h1>
    </div>
  );
}

export default Navbar;
