import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error=useRouteError();
    console.log(error);
    return (
        <div className='flex flex-col gap-10 justify-center items-center h-[100vh]'>
            <h2 className='text-6xl text-red-400'>Oops!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div className='text-center '>
                  <h3>Page Not Found</h3>
                  <Link to='/'><button className='btn mt-4 btn-sm btn-warning'>Home</button></Link>


                    </div>
            }
        </div>
    );
};

export default ErrorPage;