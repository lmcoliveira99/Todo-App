import {Link} from 'react-router-dom'

function NotFound(){
    return(
        <section className='text-center mt-64'>
           <h1 className="text-4xl font-bold mb-6 text-red-600">Page Not Found</h1>
                <p className="text-gray-600 mb-2 font-bold">Sorry, the page you are looking for might be in another universe.</p>
            <Link to="/">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
                    Go back to HomePage 
            </button>
            </Link>
        </section>
    );
}

export default NotFound;

