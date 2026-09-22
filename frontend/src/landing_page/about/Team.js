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
          <img src='media/images/profile1.png' alt='Nir Image'
           style={{borderRadius:"50%", width:"50%" }}
          />
          <br/> <br/> 
           <h4>Niraj Gupta</h4>
           <h6>Mern Stack Developer</h6>
        </div>


        <div className="col-6  ">
          <p>
I’m Niraj Gupta, a Computer Engineering student and aspiring software engineer from Nepal.

          </p>
          <p>
I enjoy building real-world applications, solving problems with code, and exploring modern technologies.          </p>
          <p>
            Currently, I’m focused on Java, DSA, web development, and turning what I learn into practical projects.
          </p>

          <p>Connect on
            <a href='https://www.nirajkgupta.com.np/' > Portfolio</a>  / 
            <a href='https://www.linkedin.com/in/niraj-gupta-670095292/'> LinkedIn</a>  /
           <a href='https://github.com/Niraj-dev-Hub'> GitHub</a>   </p>
        </div>
      </div>
    </div>
    );
}

export default  Team ;