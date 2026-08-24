import React from 'react';


function Education() {
    return (  
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-6">
               <img 
               src="media/images/education.svg" 
               alt="Education"
                style={{width:"75%"}} />
          </div>
          <div className="col-6">
            <h1 className='mb-3 fs-2' >Free and open market education</h1>
            <p> Varsity, the largest online stock market education book in the world <br/>
            covering everything from the basics to advanced tranding.
            </p>
            <a 
            href="#" 
            className="mx-5"
            style={{textDecoration:"none"}}
            >
             Versity  &nbsp;
              <i className="fa fa-long-arrow-right" 
               aria-hidden="true"></i>
            </a>

             <p className='mt-5'> Trading Q&A, the most active trading and investment community in <br/>
              india for all your market related queries.
            </p>
            <a 
            href="#" 
            className="mx-5"
            style={{textDecoration:"none"}}
            >
            TradingQ&A &nbsp;
              <i className="fa fa-long-arrow-right" 
               aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    );
}

export default  Education ;