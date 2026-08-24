import React from 'react';


function Team() {
    return (  
     <div className="container ">
      <div className="row ">
        <h1 className="fs-4  text-center ">
          People
        </h1>
      </div>

      <div className="row p-5   text-muted" 
       style={{lineHeight:"2", fontSize:"1.1em"}}
      >
        <div className="col-6 text-center  ">
          <img src='media/images/nithinKamath.jpg' alt='Nithin Image'
           style={{borderRadius:"50%", width:"50%"}}
          />
          <br/> <br/> 
           <h4>Nithin Kamath</h4>
           <h6>Founder, CEO</h6>
        </div>


        <div className="col-6  ">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.


          </p>
          <p>
          He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen.
          </p>

          <p>Connect on
            <a href=''> Homepage</a>  / 
            <a href=''> TradingQnA</a>  /
           <a href=''> Twitter</a>   </p>
        </div>
      </div>
    </div>
    );
}

export default  Team ;