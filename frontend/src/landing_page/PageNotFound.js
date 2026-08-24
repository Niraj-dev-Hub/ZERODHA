import React from 'react';
import { Link } from "react-router-dom";


function PageNotFound() {
    return (  
      <div className="container p-5 mb-5">
      <div className="row   text-center">
       

        <h1 className="mt-5"> 404  Not Found</h1>
        <p className='text-muted mb-3 mt-2'>
         Sorry, the page you are looking for doen't exists.
        </p>
        <Link className="nav-link active " to="/">
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
         Go to Home
        </button>
        </Link>
      </div>
    </div>
    );
}

export default  PageNotFound ;