import React from 'react';


function RightSection(
  {
  imageUrl,
  productName,
  productDescription,
  learnMore,
  
  }
) {
    return (  
      <div className="container " >
    <div className="row ">
      <div className="col-6 p-5 text-muted"
      style={{lineHeight:"1.8", marginTop:"10%"}}>
        <h1 className="fs-4" > {productName} </h1>
        <p className='mt-3'
        style={{width:"70%"}}
        > {productDescription} </p>

        <div  className="mt-3">
         <a href={learnMore}>Learn More </a>
        
        </div>
       
      </div>
      <div className="col-6 ">
          <img src= {imageUrl} alt="image" />

      </div>
    </div>
  </div>
    );
}

export default  RightSection ;