import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className=" pt-16 flex items-center justify-center">
            <h1 className="text black pt-16">Welcome To To-Do App, please add your tasks.</h1>
            <div>
                <Link to="/doit">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
                        Add Task
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;