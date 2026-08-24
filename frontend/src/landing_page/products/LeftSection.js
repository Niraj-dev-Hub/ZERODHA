import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return(
  <div className="container mt-5  p-5" >
    <div className="row ">
      <div className="col-4 p-5">
          <img src= {imageUrl} alt="image" />

      </div>
            <div className="col-3 p-5"> </div>

      <div className="col-5 p-5 mt-5 text-muted"
      style={{lineHeight:"2"}}>
        <h1 className="fs-4" > {productName} </h1>
        <p> {productDescription} </p>

        <div  className="mt-3">
         <a href={tryDemo}>Try Demo </a>
        <a href={learnMore}
        style={{marginLeft:"35%"}}
        > Learn More</a>
        </div>
        <div className="mt-3" >
           <a href={googlePlay}> <img src="media/images/googlePlayBadge.svg" alt=" Google play" /> </a>
            <a href={appStore} 
           style={{marginLeft:"70px"}} > 
            <img src="media/images/appstoreBadge.svg" alt="app store badge" /> </a>
        </div>
      </div>
    </div>
  </div>
)
}

export default LeftSection;
