
import { Link } from "react-router-dom";
function Sidebar(){
    return(
        <div className="Sidebar fixed flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[13rem] p-4 shadow-xl shadow-blue-gray-900/5 gap-3 text-center ">

            <Link className="border-b border-[#cecece] pb-1" to="/">Home</Link>
            <Link className="border-b border-[#cecece] pb-1" to="/about">About</Link>

        </div>
    );
}
export default Sidebar;