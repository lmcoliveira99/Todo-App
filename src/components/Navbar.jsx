import logo from "../assets/images/logo.png";

function Navbar() {

    return (
        <div className="navbar bg-blue-300 h-20 flex justify-center items-center ">
            <h1> <img className="logo h-20" src={logo} /></h1>


        </div>
    );
}
export default Navbar;