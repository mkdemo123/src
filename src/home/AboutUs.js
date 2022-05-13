import React from "react";
import sid from "../images/siddhart.jpeg";
import gajanan from "../images/gajanan.jpeg";
import chirag from "../images/chirag.jpeg";
import aneesh from "../images/aneesh.jpeg";
import pratik from "../images/pratik.jpeg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div class="container1 aboutus">
        <div class="row">
          <div class="col-md-12">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={aneesh} alt="aneesh" />
                        </div>
                        <div className="img-text">
                          <h2>Aneesh Kothavade</h2>
                          <p>
                            Hi I'm Aneesh Kothavade. I'm currently pursuing
                            Diploma in CDAC Mumbai, and my role in the project
                            is frontend developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={chirag} alt="chirag" />
                        </div>
                        <div className="img-text">
                          <h2>Chirag Dave</h2>
                          <p>
                            Hi I'm Chirag Dave. I'm currently pursuing Diploma
                            in CDAC Mumbai, and my role in the project is
                            backendend developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={gajanan} alt="gajanan" />
                        </div>
                        <div className="img-text">
                          <h2>Gajanan Rakade</h2>
                          <p>
                            Hi I'm Gajanan Rakade and I'm the Team lead of this
                            project. I'm currently pursuing Diploma in CDAC
                            Mumbai, and my role in the project is backendend
                            developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={pratik} alt="pratik" />
                        </div>
                        <div className="img-text">
                          <h2>Pratik kanase</h2>
                          <p>
                            Hi I'm Pratik kanase. I'm currently pursuing Diploma
                            in CDAC Mumbai, and my role in the project is
                            frontend developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={sid} alt="sid" />
                        </div>
                        <div className="img-text">
                          <h2>Siddharth Bhagat</h2>
                          <p>
                            Hi I'm Siddharth Bhagat. I'm currently pursuing
                            Diploma in CDAC Mumbai, and my role in the project
                            is frontend developer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
