import React from "react";

function createTicket() {
  return (
    <div className="container  mt-5">
      <div className="row p-5 ">
        <h1 className="fs-2 ">To create a ticket, select a relevant topic</h1>

        <div className=" col-4 p-5 mt-2   ">
          <h4 className=" fs-4   ">
          <i class="fa-solid fa-circle-plus"></i>
           &nbsp; Account Opening</h4>
          <ul style={{ lineHeight: "2.5", }}>
            <li>
              <a href="">Resident individual</a>
            </li>
            <li>
              <a href="">Minor</a>
            </li>
            <li>
              <a href="">Non Resident Indian (NRI)</a>
            </li>
            <li>
              <a href="">Company, Partnership, HUF and LLP</a>
            </li>
            <li>
              <a href="">Glossary</a>
            </li>
          </ul>
        </div>

        <div className=" col-4 p-5 mt-2 mb-2 ">
          <h4 className=" fs-4 ">
            <i class="fa-solid fa-circle-user"></i>
          &nbsp;  Your Zerodha Account</h4>
          <ul style={{ lineHeight: "2.5",  }}>
            <li>
              <a href="">Your Profile</a>
            </li>
            <li>
              <a href="">Account modification</a>
            </li>
            <li>
              <a href="">
                Client Master Report (CMR) and Depository Participant (DP)
              </a>
            </li>
            <li>
              <a href="">Nomination</a>
            </li>
            <li>
              <a href="">Transfer and conversion of securities</a>
            </li>
          </ul>
        </div>

        <div className=" col-4 p-5 mt-2   ">
          <h4 className=" fs-4   ">
            <i class="fa-solid fa-at"></i>
          &nbsp;  Console</h4>
          <ul style={{ lineHeight: "2.5",  }}>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Corporate actions</a>
            </li>
            <li>
              <a href="">Reports</a>
            </li>
            <li>
              <a href="">Profile</a>
            </li>
            <li>
              <a href="">Segments</a>
            </li>
          </ul>
        </div>
      </div>


       <div className="row p-5 ">
       <div className=" col-4 p-5    ">
          <h4 className=" fs-4   ">
          <i class="fa-solid fa-circle-plus"></i>
           &nbsp; Account Opening</h4>
          <ul style={{ lineHeight: "2.5", }}>
            <li>
              <a href="">Resident individual</a>
            </li>
            <li>
              <a href="">Minor</a>
            </li>
            <li>
              <a href="">Non Resident Indian (NRI)</a>
            </li>
            <li>
              <a href="">Company, Partnership, HUF and LLP</a>
            </li>
            <li>
              <a href="">Glossary</a>
            </li>
          </ul>
        </div>

        <div className=" col-4 p-5    ">
          <h4 className=" fs-4 ">
            <i class="fa-solid fa-circle-user"></i>
          &nbsp;  Your Zerodha Account</h4>
          <ul style={{ lineHeight: "2.5",  }}>
            <li>
              <a href="">Your Profile</a>
            </li>
            <li>
              <a href="">Account modification</a>
            </li>
            <li>
              <a href="">
                Client Master Report (CMR) and Depository Participant (DP)
              </a>
            </li>
            <li>
              <a href="">Nomination</a>
            </li>
            <li>
              <a href="">Transfer and conversion of securities</a>
            </li>
          </ul>
        </div>

        <div className=" col-4 p-5    ">
          <h4 className=" fs-4   ">
            <i class="fa-solid fa-at"></i>
          &nbsp;  Console</h4>
          <ul style={{ lineHeight: "2.5",  }}>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Corporate actions</a>
            </li>
            <li>
              <a href="">Reports</a>
            </li>
            <li>
              <a href="">Profile</a>
            </li>
            <li>
              <a href="">Segments</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default createTicket;
