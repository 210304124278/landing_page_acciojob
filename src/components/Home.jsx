import React from "react";
import acciojob_logo from "../images/acciojob_logo.png";
import hourglass from "../images/hourglass.png";
import TopCompanies_logo from "../images/TopCompanies_logo.png";
import IITGuwahati_logo from "../images/IITGuwahati_logo.png";
import YCombinator_logo from "../images/YCombinator_logo.png";
import IITDelhi_ from "../images/IITDelhi_.png";
import RedStar from "../images/RedStar.png";
import people from "../images/people.png";
import green_tick from "../images/green_tick.png";
import dollar from "../images/dollar.png";
import star from "../images/star.png";
import { useState } from "react";

const Home = () => {
  const [countryCode,setCountryCode]=useState("+91");
  const handleCountryCodeChange=(code)=>{
    setCountryCode(code);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse d-flex justify-content-between align-items-center p-3">
            <ul className="navbar-nav ">
              <li>
                <a className="navbar-brand text-dark ps-5 " href="#">
                  <img
                    src={acciojob_logo}
                    alt="Logo"
                    style={{ height: "30px", width: "40x" }}
                  ></img>
                </a>
              </li>
            </ul>
          </div>

          <div
            className="collapse navbar-collapse d-flex justify-content-between  align-items-center "
            style={{ paddingRight: "38rem" }}
          >
            <ul className="navbar-nav ">
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  style={{
                    backgroundColor: "#2F80ED",
                    borderRadius: "8px",
                    padding: "7px 16px",
                  }}
                >
                  Courses
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#" className="dropdown-item">
                      Full Stack
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Data Science
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      Cyber Security
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div
            className="collapse navbar-collapse d-flex justify-content-between align-items-center "
            style={{ paddingRight: "3rem" }}
          >
            <ul className="navbar-nav ">
              <li className="nav-item active">
                <a
                  className="nav-link text-dark"
                  href="#"
                  style={{ fontSize: "14px" }}
                >
                  AccioJob Reviews
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark"
                  href="#"
                  style={{ fontSize: "14px" }}
                >
                  Placement Highlights
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-dark"
                  href="#"
                  style={{ fontSize: "14px" }}
                >
                  Refer & Earn
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-dark dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  style={{ fontSize: "14px" }}
                >
                  More
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#" className="dropdown-item">
                      <i className="fa fa-angle-left"></i>
                      <i className="fa fa-angle-right"></i>
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      <i className="fa-solid fa-newspaper"></i> Blogs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
                      <i className="fa-solid fa-briefcase"></i> Hire from Us
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  className="btn btn-outline-primary"
                  style={{ padding: "8px 16px" }}
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        style={{
          height: "50px",
          backgroundColor: "#2F80ED",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <p style={{ color: "white", margin: 0 }}>
          Next batch starts on
          <img
            src={hourglass}
            alt="HourGlass"
            style={{ height: "20px", width: "20px" }}
          ></img>{" "}
          8th September. Hurry, limited seats left!
        </p>
      </div>
      <div className="d-flex align-items-center justify-content-around">
        <div style={{ marginBottom: "200px" }}>
          <h1
            className="text-left fw-bold d-flex align-items-center flex-wrap w-100 custom-heading ps-5"
            style={{
              fontSize: "50px",
              lineHeight: "65px",
              letterSpacing: "-0.015em",
              marginTop: "60px",
            }}
          >
            <span
              style={{
                color: "#2F80ED",
                letterSpacing: "-0.015em",
                marginRight: "10px",
              }}
            >
              Upskill
            </span>{" "}
            And Land Your Dream
          </h1>

          <h1
            className="text-left fw-bold d-flex align-items-center flex-wrap w-100 custom-heading  ps-5"
            style={{
              color: "#2F80ED",
              fontSize: "50px",
              lineHeight: "65px",
              letterSpacing: -"-0.015em",
            }}
          >
            Tech Job
            <img
              src={star}
              alt="star"
              style={{ height: "60px", marginLeft: "10px" }}
            ></img>
          </h1>
          <p
            class="fw-medium custom-text ps-5"
            style={{
              color: "#4c5864",
              fontSize: "20px",
              lineHeight: "140%",
              letterSpacing: "=0.6px",
              width: "90%",
            }}
          >
            Courses,certifications and placements assistance with 60+ hiring
            drives
          </p>
          <p
            class="fw-medium custom-text ps-5"
            style={{
              color: "#4c5864",
              fontSize: "20px",
              lineHeight: "140%",
              letterSpacing: "=0.6px",
              width: "90%",
            }}
          >
            each month to help you land your dream tech job!
          </p>
          <div
            className="ms-5 text-left fw-bold d-flex align-items-center flex-wrap custom-heading "
            style={{
              height: "75px",
              width: "86%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              margin: "20px opx",
              background: "#fff",
              border: "1px solid #e2e2e2",
              boxShadow: "0 2px 40px rgba(0, 0, 0, .08)",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            <div>
              <img
                src={green_tick}
                alt="tick"
                style={{ height: "50px", width: "50px", marginBottom: "25px" }}
              ></img>
            </div>
            <div>
              <p style={{ fontSize: "20px", width: "61.23px", height: "15px" }}>
                1500+
              </p>
              <p style={{ fontSize: "12px" }}>Students placed</p>
            </div>
            <div>
              <img
                src={RedStar}
                alt="RedStar"
                style={{ height: "50px", width: "50px", marginBottom: "25px" }}
              ></img>
            </div>
            <div>
              <p style={{ fontSize: "20px", height: "15px" }}>41 LPA</p>
              <p style={{ fontSize: "12px" }}>Highest Salary</p>
            </div>
            <div>
              <img
                src={people}
                alt="people"
                style={{ height: "50px", width: "50px", marginBottom: "25px" }}
              ></img>
            </div>
            <div>
              <p style={{ fontSize: "20px", height: "15px" }}>450+</p>
              <p style={{ fontSize: "12px" }}>Partner Companies</p>
            </div>
            <div>
              <img
                src={dollar}
                alt="dollor"
                style={{ height: "50px", width: "50px", marginBottom: "25px" }}
              ></img>
            </div>
            <div>
              <p style={{ fontSize: "20px", height: "15px" }}>7.2 LPA</p>
              <p style={{ fontSize: "12px" }}>Average Salary</p>
            </div>
          </div>
          <div className="container ms-5 mt-5" style={{ color: "#2F80ED" }}>
            <ol
              className="breadcrumb"
              style={{ fontSize: "90px", fontWeight: "100" }}
            >
              <li
                className="breadcrumb-item active"
                style={{
                  fontSize: "20px",
                  width: "240px",
                  fontWeight: "bold",
                  background: "none",
                }}
              >
                <a
                  href="#"
                  style={{
                    background: "linear-gradient(277deg, #a722f6, #0082f5)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Full Stack Development
                </a>
              </li>

              <li
                className="breadcrumb-item active"
                style={{
                  fontSize: "20px",
                  width: "220px",
                  fontWeight: "bold",
                  background: "none",
                }}
              >
                <a
                  href="#"
                  style={{
                    background: "linear-gradient(277deg, #a722f6, #0082f5)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Data Science & AI
                </a>
              </li>

              <li
                className="breadcrumb-item active"
                style={{
                  fontSize: "20px",
                  width: "240px",
                  fontWeight: "bold",
                  background: "none",
                }}
              >
                <a
                  href="#"
                  style={{
                    background: "linear-gradient(277deg, #a722f6, #0082f5)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Cyber Security
                </a>
              </li>
            </ol>
          </div>
          <div className="container ms-5">
            <ol
              class="breadcrumb "
              style={{ fontSize: "40px", fontWeight: "100" }}
            >
              <li className="breadcrumb-item active ">
                <img
                  src={TopCompanies_logo}
                  alt="TopCompanies"
                  style={{ height: "70px", width: "100px" }}
                ></img>
              </li>
              <li className="breadcrumb-item ">
                <img
                  src={YCombinator_logo}
                  alt="YCombinator_logo"
                  style={{ height: "70px", width: "190px" }}
                ></img>
              </li>
              <li className="breadcrumb-item ">
                <img
                  src={IITDelhi_}
                  alt="IITDelhi_"
                  style={{ height: "80px", width: "140px" }}
                ></img>
              </li>
              <li className="breadcrumb-item ">
                <img
                  src={IITGuwahati_logo}
                  alt="IITGuwahati_logo"
                  style={{ height: "80px", width: "120px" }}
                ></img>
              </li>
            </ol>
          </div>
        </div>

        {/* form */}
        <div
          className="d-flex flex-column align-items-center justify-content-between p-5 border border-grey me-4"
          style={{
            height: "470px",
            marginTop: "90px",
            marginBottom: "20%",
            boxSizing: "border-box",
          }}
        >
          <div>
            <div className=" d-flex justify-content-center flex-column text-center">
              <b>
                <p style={{ fontSize: "20px" }}>
                  Start learning for{" "}
                  <span style={{ color: "#2F80ED", fontSize: "20px" }}>
                    FREE
                  </span>
                </p>
              </b>
              <p>Lectures & Assignments curated by Top Tech </p>
              <p>Professionals</p>
            </div>

            <div className="d-flex flex-column justify-content-around text-center w-100">
              <div className="d-flex flex-column justify-content-around text-center w-100">
                <div className="d-flex justify-content-center align-items-center input-group">
                  <span className="input-group-text">
                    <i className="fa-solid fa-user"></i>
                  </span>
                  <input
                    className="form-control w-75 ms-2" // 'ms-2' for margin start
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                  />
                </div>
              </div>

              <div className="d-flex justify-content-center mt-3 align-items-center">
                <div className="input-group">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    +91
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#" onClick={(e)=>handleCountryCodeChange("+1 (USA)")}>
                        +1 (USA)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => handleCountryCodeChange('+44 (UK)')}>
                        +44 (UK)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => handleCountryCodeChange('+91 (India)')}>
                        +91 (India)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => handleCountryCodeChange('+61 (Australia)')}>
                        +61 (Australia)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={() => handleCountryCodeChange('+81 (Japan)')}>
                        +81 (Japan)
                      </a>
                    </li>
                  </ul>
                  <input
                    className="form-control"
                    type="tel"
                    name="PhoneNumber"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
