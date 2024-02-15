import {Link} from 'react-router-dom'

function NotFound(){
    return(
        <section className='text-center mt-64'>
            <h1>Page Not Found</h1>
            <Link to="/">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
                    Go back to HomePage 
            </button>
            </Link>
        </section>
    );
}

export default NotFound;