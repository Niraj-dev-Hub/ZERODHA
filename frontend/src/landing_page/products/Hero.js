import React from 'react';


function Hero() {
    return (  
     <div className="container mt-5  border-bottom">
      <div className="row text-center p-5 "
         style={{lineHeight:"4"}}
      >

        <h1 className='fs-2'>Zerodha Products</h1>
        <h4 className='fs-5 text-muted mt-3'>Sleek, modern, and intuitive trading platforms</h4>
        <p className='fs-6'>Check out our <a href=''>investment offerings →</a> </p>
      </div>
     </div>
    );
}

export default  Hero ;