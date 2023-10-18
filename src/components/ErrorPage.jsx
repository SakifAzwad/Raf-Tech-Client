import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    
    <div className="text-5xl h-screen text-center bg-col1 text-col4" id="error-page">
      <h1 >Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/"> <button className="btn bg-col3 text-col4 border-0  hover:bg-col4 hover:text-col1">
                Home
              </button></Link>
    </div>
  );
}